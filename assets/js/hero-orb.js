/* ============================================================================
   Hero Particle Sphere + Orbiting Images  ·  Big W. Studio
   Vanilla Three.js (ESM). Drag = horizontal rotate only, no zoom, auto-spin.
   ============================================================================ */

import * as THREE from 'three';

const mount = document.getElementById('hero-orb');
if (mount) {
  // build image list: each project's thumbnail + a few showcase shots
  const imgs = [];
  const projects = (window.projects || []).filter(p => p.featured);
  projects.forEach(p => {
    if (p.thumb) imgs.push(p.thumb);
    // skip mobile (portrait) showcases — different aspect ratio looks off in the ring
    if (p.device !== 'mobile') {
      const n = Math.min(2, p.shots || 0);
      for (let i = 0; i < n; i++) imgs.push(`images/projects/${p.gallerySlug}/showcase_${i}.webp`);
    }
  });
  if (imgs.length) {
    try { initOrb(mount, imgs); }
    catch (e) { console.warn('[hero-orb] WebGL unavailable, skipping.', e); }
  }
}

function initOrb(mount, images) {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const W = () => mount.clientWidth || 1;
  const H = () => mount.clientHeight || 1;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, W() / H(), 0.1, 100);
  camera.position.set(0, 0, 23);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(W(), H());
  mount.appendChild(renderer.domElement);

  /* ── view framing (tune these to move the orb away from the text) ── */
  const VIEW_DROP = -4.8;                  // push the orb lower on screen
  const VIEW_POLAR = Math.PI / 2.35 - 0.32;  // tilt: look down at the orb (bigger = more top-down)
  const content = new THREE.Group();
  content.position.y = -VIEW_DROP;
  scene.add(content);

  const R = 9;     // particle sphere radius
  const RI = 12.5; // image-ring radius (orbit outside the sphere, well-spaced)

  /* ── particle sphere (Fibonacci distribution) ── */
  const COUNT = W() < 700 ? 900 : 1700;
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);
  const cMint = new THREE.Color('#36F2A5');
  const cPale = new THREE.Color('#dff7ec');
  for (let i = 0; i < COUNT; i++) {
    const phi = Math.acos(-1 + (2 * i) / COUNT);
    const theta = Math.sqrt(COUNT * Math.PI) * phi;
    const rr = R + (Math.random() - 0.5) * 4;
    pos[i * 3] = rr * Math.cos(theta) * Math.sin(phi);
    pos[i * 3 + 1] = rr * Math.cos(phi);
    pos[i * 3 + 2] = rr * Math.sin(theta) * Math.sin(phi);
    const c = Math.random() < 0.5 ? cMint : cPale;
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  const pgeo = new THREE.BufferGeometry();
  pgeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pgeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pmat = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true, depthWrite: false });
  content.add(new THREE.Points(pgeo, pmat));

  /* ── orbiting image planes (around the equator, facing outward) ── */
  const loader = new THREE.TextureLoader();
  const N = images.length;
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  images.forEach((src, i) => {
    const angle = (i / N) * Math.PI * 2;
    const x = RI * Math.cos(angle);
    const z = RI * Math.sin(angle);
    loader.load(src, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = maxAniso;
      const iw = (tex.image && tex.image.width) || 1;
      const ih = (tex.image && tex.image.height) || 1;
      const ar = iw / ih;
      const h = 2.5;
      const w = h * ar;
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, transparent: true })
      );
      mesh.position.set(x, 0, z);
      mesh.lookAt(x * 2, 0, z * 2); // face outward (mesh +Z points to the lookAt target)
      content.add(mesh);
    });
  });

  /* ── fixed tilted camera + manual horizontal spin ──
     (no OrbitControls → we control touch so vertical swipe still scrolls the page) */
  camera.position.setFromSpherical(new THREE.Spherical(23, VIEW_POLAR, 0));
  camera.lookAt(0, 0, 0);

  let rotY = 0, vel = 0, dragging = false, lastX = 0;
  const AUTO = reduce ? 0 : 0.0006;        // continuous auto-spin (lower = slower)
  const dom = renderer.domElement;
  // touch-action: pan-y (set in CSS) lets the browser keep vertical scroll;
  // horizontal drags come to us as pointer events. We never preventDefault.
  const onDown = (e) => { dragging = true; lastX = e.clientX; vel = 0; };
  const onMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX; lastX = e.clientX;
    const d = dx * 0.005; rotY += d; vel = d;
  };
  const onUp = () => { dragging = false; };
  dom.addEventListener('pointerdown', onDown);
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);  // fired when a vertical scroll takes over

  /* ── resize ── */
  const onResize = () => {
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
    renderer.setSize(W(), H());
  };
  window.addEventListener('resize', onResize, { passive: true });

  /* ── pause when hero off-screen / tab hidden ── */
  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0 }).observe(mount);
  }

  /* ── render loop ── */
  const loop = () => {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    if (!dragging) { rotY += AUTO + vel; vel *= 0.94; } // auto-spin + release inertia
    content.rotation.y = rotY;
    renderer.render(scene, camera);
  };
  loop();
}
