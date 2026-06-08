/* ============================================================================
   View counter — Netlify Function backed by Upstash Redis (REST)
   ----------------------------------------------------------------------------
   GET  /.netlify/functions/views?id=<projectId>   → { id, count }   (read)
   POST /.netlify/functions/views?id=<projectId>    → { id, count }   (increment)

   Set these env vars in Netlify (Site settings → Environment variables):
     UPSTASH_REDIS_REST_URL    = https://<your-db>.upstash.io
     UPSTASH_REDIS_REST_TOKEN  = <your REST token>
   ============================================================================ */

const ALLOWED = new Set([
  'icetaowarmvibes',
  'komes-portfolio',
  'plantica',
  'wallopes',
]);

export default async (req) => {
  const json = (body, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });

  const id = new URL(req.url).searchParams.get('id');
  if (!id || !ALLOWED.has(id)) return json({ error: 'invalid id' }, 400);

  const base = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!base || !token) return json({ error: 'counter not configured' }, 500);

  const key = `views:${id}`;
  const cmd = req.method === 'POST' ? `incr/${key}` : `get/${key}`;

  try {
    const r = await fetch(`${base}/${cmd}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await r.json();
    return json({ id, count: Number(data.result || 0) });
  } catch (e) {
    return json({ error: 'upstream error' }, 502);
  }
};
