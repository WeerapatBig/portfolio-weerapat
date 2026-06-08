/* ============================================================================
   WEERAPAT B. — Project detail renderer  ·  Big W. Studio
   ============================================================================ */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    setupNav();
    setupMenu();
    renderMenuContact();
    renderDetail();
    setupReveal();
  }

  function cleanUrl(url) { return url.replace(/^https?:\/\//, '').replace(/\/$/, ''); }
  function tel(p) { return p.replace(/[\s-]/g, ''); }
  function commas(n) { return Number(n || 0).toLocaleString('en-US'); }
  function shotPaths(p) {
    const n = p.shots || 0;
    const out = [];
    for (let i = 0; i < n; i++) out.push(`images/projects/${p.gallerySlug}/showcase_${i}.png`);
    if (!out.length && p.thumb) out.push(p.thumb);
    return out;
  }

  /* icons */
  const ICON = {
    cal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
    out: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>`,
    arr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
    back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
    down: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>`,
    chev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  };

  /* ───────── render ───────── */
  function renderDetail() {
    const host = document.getElementById('project-content');
    if (!host || !window.projects) return;

    const id = new URLSearchParams(window.location.search).get('id');
    const p = window.projects.find(x => x.id === id);

    if (!p) {
      host.innerHTML = `
        <div class="proj-404">
          <span class="kick" style="display:inline-flex;">Error 404</span>
          <h1>ไม่พบโปรเจคนี้</h1>
          <p>ลิงก์ที่คุณเข้ามาอาจไม่ถูกต้อง หรือโปรเจคถูกย้าย</p>
          <a href="index.html" class="btn btn-primary">กลับหน้าแรก ${ICON.arr}</a>
        </div>`;
      document.title = 'ไม่พบโปรเจค — Weerapat B.';
      return;
    }

    document.title = `${p.title} — Weerapat B.`;
    const url = cleanUrl(p.url);
    const imgs = shotPaths(p);
    const device = p.device === 'mobile' ? 'mobile' : 'desktop';
    const others = window.projects.filter(x => x.id !== p.id && x.featured).slice(0, 3);

    const slides = imgs.map((src, i) =>
      `<img class="pj-slide${i === 0 ? ' is-active' : ''}" data-i="${i}" src="${src}" alt="${p.title} — ภาพที่ ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async">`).join('');
    const dots = imgs.map((_, i) =>
      `<button class="pj-dot${i === 0 ? ' is-active' : ''}" type="button" data-i="${i}" aria-label="ไปที่ภาพที่ ${i + 1}"></button>`).join('');
    const thumbs = imgs.map((src, i) =>
      `<button class="pj-thumb${i === 0 ? ' is-active' : ''}" type="button" data-i="${i}" aria-label="ภาพที่ ${i + 1}"><img src="${src}" alt="" loading="lazy" decoding="async"></button>`).join('');

    const highlights = (p.highlights || []).map(h => `<li>${h}</li>`).join('');
    const features = (p.features || []).map(f => `<li>${f}</li>`).join('');
    const tools = (p.tools || []).map(t => `<span class="pj-chip-tech">${t}</span>`).join('');
    const tags = (p.tags || []).map(t => `<span class="pj-tag">#${t}</span>`).join('');
    const overviewLong = [p.overview, p.result].filter(Boolean).join(' ');

    host.innerHTML = `
      <div class="pj-top">
        <a href="index.html#work" class="backlink">${ICON.back} กลับไปดูผลงานทั้งหมด</a>
      </div>

      <header class="pj-hero">
        <div class="pj-hero-meta reveal">
          <span class="pj-chip">Case Study</span>
          <span class="pj-mi">${ICON.cal} ${p.date || p.year}</span>
          <span class="pj-mi">${ICON.eye} <span id="pj-views">${commas(p.views)}</span> ครั้ง</span>
          <span class="pj-catchip">${p.category}</span>
        </div>
        <h1 class="reveal d1">${p.title}</h1>
        <p class="pj-hero-sub reveal d2">${p.summary}</p>
        <div class="pj-hero-actions reveal d3">
          <a href="${p.url}" target="_blank" rel="noopener" class="btn btn-primary">ดูเว็บไซต์จริง ${ICON.out}</a>
          <a href="index.html#contact" class="btn btn-ghost">สนใจงานแบบนี้</a>
        </div>
      </header>

      <section class="pj-showcase reveal" data-device="${device}">
        <div class="pj-stage pj-${device}">
          <button class="pj-nav pj-prev" type="button" data-dir="-1" aria-label="ภาพก่อนหน้า">${ICON.chev}</button>
          <div class="pj-frame">
            ${device === 'mobile' ? '<span class="pj-notch" aria-hidden="true"></span>' : `<span class="pj-bar" aria-hidden="true"><i></i><i></i><i></i><em>${url}</em></span>`}
            <div class="pj-screen"><div class="pj-slides">${slides}</div></div>
          </div>
          <button class="pj-nav pj-next" type="button" data-dir="1" aria-label="ภาพถัดไป">${ICON.chev}</button>
        </div>
        <div class="pj-dots">${dots}</div>
        <div class="pj-thumbs">${thumbs}</div>
      </section>

      <section class="pj-summary">
        <div class="pj-sum-grid">
          <div class="pj-sum-block reveal">
            <span class="kick">ภาพรวมโปรเจกต์</span>
            <p>${p.overview || p.summary}</p>
          </div>
          <div class="pj-sum-block reveal d1">
            <span class="kick">จุดเด่นของผลงาน</span>
            <ul class="pj-highlights">${highlights}</ul>
          </div>
          <div class="pj-sum-block pj-fit reveal d2">
            <span class="kick">ผลงานนี้เหมาะกับ</span>
            <p>${p.fit || ''}</p>
          </div>
        </div>
      </section>

      <section class="pj-detail">
        <div class="pj-detail-grid">
          <aside class="pj-side">
            <div class="pj-side-in">
              <h2 class="reveal">รายละเอียดผลงาน</h2>
              <p class="reveal d1">อ่านรายละเอียดให้เข้าใจงานลึกขึ้น</p>
              <a href="index.html#contact" class="btn btn-primary reveal d2">สนใจโปรเจกต์ ${ICON.arr} <span>ติดต่อเรา</span></a>
              <div class="pj-side-links reveal d2">
                <a href="index.html#work" class="pj-textlink">${ICON.back} กลับไปรายการผลงาน</a>
                <a href="#pj-related" class="pj-textlink">ดูผลงานใกล้เคียง ${ICON.down}</a>
              </div>
            </div>
          </aside>
          <div class="pj-detail-body">
            <article class="pj-art reveal"><span class="pj-art-n">3.1</span><h3>ภาพรวม</h3><p>${overviewLong}</p></article>
            <article class="pj-art reveal"><span class="pj-art-n">3.2</span><h3>ฟีเจอร์หลัก</h3><ul class="pj-feat">${features}</ul></article>
            <article class="pj-art reveal"><span class="pj-art-n">3.3</span><h3>เทคโนโลยี</h3><p>${p.techDetail || p.devApproach}</p></article>
          </div>
        </div>
      </section>

      <section class="pj-band">
        <div class="pj-band-row reveal">
          <span class="kick">เทคโนโลยี &amp; เครื่องมือ</span>
          <div class="pj-chips">${tools}</div>
        </div>
        <div class="pj-band-row reveal d1">
          <span class="kick">แท็กที่เกี่ยวข้อง</span>
          <div class="pj-chips">${tags}</div>
        </div>
      </section>

      ${others.length ? `
      <section class="pj-related" id="pj-related">
        <div class="pj-rel-head reveal">
          <span class="kick">ผลงานที่เกี่ยวข้อง</span>
          <h2>ผลงานอื่น ๆ</h2>
        </div>
        <div class="pj-rel-grid">
          ${others.map((o, i) => `
            <a class="pj-rel-card reveal${i ? ' d' + i : ''}" href="project.html?id=${o.id}">
              <span class="pj-rel-shot"><img src="${o.thumb}" alt="${o.title}" loading="lazy" decoding="async"></span>
              <span class="pj-rel-info">
                <span class="pj-rel-cat">${o.category}</span>
                <span class="pj-rel-title">${o.title} <span class="pj-rel-go">${ICON.out}</span></span>
              </span>
            </a>`).join('')}
        </div>
      </section>` : ''}
    `;

    setupShowcase();
    setupViews(p);
    window.scrollTo(0, 0);
  }

  /* ───────── real view counter (Netlify Function + Upstash KV) ───────── */
  function setupViews(p) {
    const el = document.getElementById('pj-views');
    if (!el) return;
    const ENDPOINT = '/.netlify/functions/views';
    const today = new Date().toISOString().slice(0, 10);
    const dayKey = `wbv:${p.id}:${today}`;
    let firstToday = false;
    try { firstToday = !localStorage.getItem(dayKey); } catch (e) { /* storage blocked */ }

    fetch(`${ENDPOINT}?id=${encodeURIComponent(p.id)}`, { method: firstToday ? 'POST' : 'GET' })
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => {
        if (typeof d.count === 'number') {
          el.textContent = commas(d.count);
          if (firstToday) { try { localStorage.setItem(dayKey, '1'); } catch (e) { /* ignore */ } }
        }
      })
      .catch(() => { /* not deployed / offline → keep placeholder number */ });
  }

  /* ───────── showcase carousel ───────── */
  function setupShowcase() {
    const root = document.querySelector('.pj-showcase');
    if (!root) return;
    const slides = Array.from(root.querySelectorAll('.pj-slide'));
    const dots = Array.from(root.querySelectorAll('.pj-dot'));
    const thumbs = Array.from(root.querySelectorAll('.pj-thumb'));
    const total = slides.length;
    if (total <= 1) { root.querySelectorAll('.pj-nav').forEach(b => b.style.display = 'none'); }
    if (!total) return;
    let active = 0;

    const go = (i) => {
      active = (i % total + total) % total;
      slides.forEach((s, k) => s.classList.toggle('is-active', k === active));
      dots.forEach((d, k) => d.classList.toggle('is-active', k === active));
      thumbs.forEach((t, k) => {
        const on = k === active;
        t.classList.toggle('is-active', on);
        if (on) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      });
    };

    root.querySelectorAll('.pj-nav').forEach(b => b.addEventListener('click', () => go(active + Number(b.dataset.dir))));
    dots.forEach(d => d.addEventListener('click', () => go(Number(d.dataset.i))));
    thumbs.forEach(t => t.addEventListener('click', () => go(Number(t.dataset.i))));

    // keyboard arrows when stage focused/hovered
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') go(active - 1);
      else if (e.key === 'ArrowRight') go(active + 1);
    });
  }

  /* ───────── nav / menu (shared behaviour) ───────── */
  function setupNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function setupMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('menu');
    const veil = document.getElementById('menu-veil');
    if (!toggle || !menu || !veil) return;
    const close = () => {
      menu.classList.remove('is-open'); veil.classList.remove('is-open'); toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    const open = () => {
      menu.classList.add('is-open'); veil.classList.add('is-open'); toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true'); menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    toggle.addEventListener('click', () => menu.classList.contains('is-open') ? close() : open());
    veil.addEventListener('click', close);
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) close(); });
  }

  function renderMenuContact() {
    const host = document.getElementById('menu-contact');
    if (!host || !window.siteConfig) return;
    const c = window.siteConfig.contact;
    const out = [];
    if (c.email) out.push(`<a href="mailto:${c.email}">${c.email}</a>`);
    if (c.phone) out.push(`<a href="tel:${tel(c.phone)}">${c.phoneDisplay || c.phone}</a>`);
    if (c.instagram) out.push(`<a href="${c.instagramUrl}" target="_blank" rel="noopener">IG: @${c.instagram}</a>`);
    host.innerHTML = out.join('');
  }

  /* ───────── reveal ───────── */
  function setupReveal() {
    setTimeout(() => {
      const els = document.querySelectorAll('.reveal');
      if (!els.length) return;
      if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
      els.forEach(el => io.observe(el));
      document.querySelectorAll('.pj-hero .reveal, .pj-top .reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 60 * i + 80);
      });
    }, 40);
  }

})();
