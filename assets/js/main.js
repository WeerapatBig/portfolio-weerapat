/* ============================================================================
   WEERAPAT B. — Home interactions  ·  Big W. Studio
   ============================================================================ */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    renderWork();
    setupThumbFallback();
    renderServices();
    renderProcess();
    setupProcessStepper();
    renderContact();
    renderFooterContact();
    renderMenuContact();
    setupStats();
    setupNav();
    setupMenu();
    startClock();
    setupReveal();
    setupSmoothScroll();
    setupHeroRotator();
    runLoader();
  }

  /* ───────── Hero rotating tagline ───────── */
  function setupHeroRotator() {
    const dEl = document.getElementById('rot-design');
    const cEl = document.getElementById('rot-code');
    if (!dEl || !cEl) return;

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // keep the static signature

    const FRAMES = [
      { design: 'feels right.', code: 'Code that works.' },
      { design: 'converts.', code: 'Code that delivers.' },
      { design: 'stands out.', code: 'Code that holds up.' },
      { design: 'performs.', code: 'Code that scales.' },
    ];
    const STAGGER = 0.022, DUR = 0.7, INTERVAL = 2800;
    let idx = 0, current;

    dEl.classList.add('rot-on'); // continuous mint highlight via ::after

    const build = (el, text) => {
      el.textContent = '';
      const out = [];
      for (const ch of text) {
        const s = document.createElement('span');
        s.className = 'rc';
        s.textContent = ch === ' ' ? ' ' : ch;
        el.appendChild(s);
        out.push(s);
      }
      return out;
    };

    const enter = (frame) => {
      const all = build(dEl, frame.design, true).concat(build(cEl, frame.code, false));
      all.forEach((s, i) => { s.style.transitionDelay = (i * STAGGER) + 's'; s.classList.add('is-in'); });
      void dEl.offsetWidth; // reflow
      all.forEach(s => s.classList.remove('is-in'));
      return all;
    };

    const exit = (spans) => new Promise(res => {
      spans.forEach((s, i) => { s.style.transitionDelay = (i * STAGGER) + 's'; });
      void dEl.offsetWidth;
      spans.forEach(s => s.classList.add('is-out'));
      setTimeout(res, spans.length * STAGGER * 1000 + DUR * 1000 + 40);
    });

    const grow = () => dEl.classList.add('mark-in');     // underline 0 → 100%
    const shrink = () => dEl.classList.remove('mark-in'); // underline 100% → 0
    const MARK_MS = 600;  // matches the ::after transition
    const HOLD = 1500;    // time fully shown (mark grown) before changing

    // seed the already-visible signature as character spans (no visible change)
    current = build(dEl, FRAMES[0].design).concat(build(cEl, FRAMES[0].code));

    function next() {
      shrink(); // mark recedes together with the outgoing text
      exit(current).then(() => {
        idx = (idx + 1) % FRAMES.length;
        current = enter(FRAMES[idx]);
        const enterMs = current.length * STAGGER * 1000 + DUR * 1000;
        setTimeout(() => {           // text ~80% settled → grow the underline
          grow();
          setTimeout(next, MARK_MS + HOLD);
        }, enterMs * 0.6);
      });
    }

    // first frame: grow the underline after the load reveal, then start cycling
    setTimeout(() => { grow(); setTimeout(next, MARK_MS + HOLD); }, 1300);
  }

  /* ───────── Hero status panel: live Bangkok clock ───────── */
  function startClock() {
    const el = document.getElementById('hp-time');
    if (!el) return;
    const tick = () => {
      try {
        el.textContent = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Bangkok', hour: '2-digit', minute: '2-digit', hour12: false,
        }).format(new Date());
      } catch (e) {
        const d = new Date();
        el.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
      }
    };
    tick();
    setInterval(tick, 15000);
  }

  /* ───────── helpers ───────── */
  function cleanUrl(url) {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
  function tel(p) { return p.replace(/[\s-]/g, ''); }

  /* ───────── project mock (browser chrome) ───────── */
  function mock(p) {
    const u = cleanUrl(p.url);
    const cat = (p.category || '').toUpperCase();
    const bodies = {
      warm: `
        <div class="mock-body">
          <svg class="mock-deco" viewBox="0 0 24 24" fill="none" stroke="#6b4423" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          <div class="mock-t"><small>${cat}</small>${p.title}</div>
        </div>`,
      minimal: `
        <div class="mock-body">
          <div class="mock-grid"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="mock-t"><small>${cat}</small>${p.title}</div>
        </div>`,
      nature: `
        <div class="mock-body">
          <svg class="mock-deco" viewBox="0 0 100 100" fill="none">
            <path d="M50 10 Q70 30 60 50 Q50 70 50 90" stroke="#1f4e2e" stroke-width="2" opacity="0.5"/>
            <path d="M55 25 Q75 30 80 45" stroke="#1f4e2e" stroke-width="1.5" opacity="0.4"/>
            <path d="M50 40 Q35 50 30 65" stroke="#1f4e2e" stroke-width="1.5" opacity="0.4"/>
            <ellipse cx="68" cy="35" rx="8" ry="3" fill="#2d6a3e" opacity="0.6" transform="rotate(-20 68 35)"/>
            <ellipse cx="55" cy="55" rx="10" ry="4" fill="#2d6a3e" opacity="0.5" transform="rotate(20 55 55)"/>
            <ellipse cx="35" cy="70" rx="7" ry="3" fill="#2d6a3e" opacity="0.5" transform="rotate(-30 35 70)"/>
          </svg>
          <div class="mock-t"><small>${cat}</small>${p.title}</div>
        </div>`,
      premium: `
        <div class="mock-body">
          <div class="mock-prod"></div>
          <div class="mock-t"><small>${cat}</small>${p.title}</div>
        </div>`,
      tech: `<div class="mock-body"><div class="mock-t"><small>${cat}</small>${p.title}</div></div>`,
    };
    return `
      <div class="mock">
        <div class="mock-bar"><span class="d"></span><span class="d"></span><span class="d"></span><span class="u">${u}</span></div>
        ${bodies[p.theme] || bodies.tech}
      </div>`;
  }

  /* real thumbnail if provided, else CSS mock (with graceful 404 fallback) */
  function preview(p) {
    if (p.thumb) {
      return `<img class="shot-img" src="${p.thumb}" alt="ตัวอย่างเว็บ ${p.title}" loading="lazy" data-id="${p.id}">`;
    }
    return mock(p);
  }

  function setupThumbFallback() {
    if (!window.projects) return;
    const byId = {};
    window.projects.forEach(p => { byId[p.id] = p; });
    document.querySelectorAll('img.shot-img').forEach(img => {
      img.addEventListener('error', () => {
        const p = byId[img.dataset.id];
        const shot = img.closest('.shot');
        if (p && shot) shot.innerHTML = mock(p);
      }, { once: true });
    });
  }

  /* ───────── Work: asymmetric project grid ───────── */
  function renderWork() {
    const host = document.getElementById('work-grid');
    if (!host || !window.projects) return;
    const items = window.projects.filter(p => p.featured);

    host.innerHTML = items.map((p, i) => `
      <a class="pcard reveal${i % 2 ? ' d1' : ''}" href="project.html?id=${p.id}">
        <span class="pcard-shot theme-${p.theme}"><span class="shot">${preview(p)}</span></span>
        <span class="pcard-info">
          <span class="pcard-meta"><span class="num">${String(i + 1).padStart(2, '0')}</span><span class="cat">${p.category}</span><span class="yr">${p.year}</span></span>
          <span class="pcard-title">${p.title}
            <span class="pcard-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></span>
          </span>
          <span class="pcard-sum">${p.summary}</span>
          <span class="pcard-tags">${p.tools.map(t => `<span>${t}</span>`).join('')}</span>
        </span>
      </a>`).join('');
  }

  /* ───────── Services (offer cards) ───────── */
  function renderServices() {
    const host = document.getElementById('svc-list');
    if (!host || !window.siteConfig) return;
    host.innerHTML = window.siteConfig.services.map((s, i) => `
      <article class="svc-card reveal${i % 2 ? ' d1' : ''}">
        <span class="svc-ghost" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3>${s.title}</h3>
        <div class="svc-fit"><span class="lbl">เหมาะกับ</span><span>${s.fit}</span></div>
        <p>${s.desc}</p>
        <a class="svc-cta" href="#contact">สนใจบริการนี้
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          <span class="go">ปรึกษาเรา</span>
        </a>
      </article>`).join('');
  }

  /* ───────── Process (horizontal stepper + detail panel) ───────── */
  function renderProcess() {
    const host = document.getElementById('proc-list');
    if (!host || !window.siteConfig) return;
    const stops = window.siteConfig.process.map((s, i) => `
      <button class="proc-stop${i === 0 ? ' is-active' : ''}" type="button" data-i="${i}" aria-pressed="${i === 0 ? 'true' : 'false'}">
        <span class="proc-node">${s.step}</span>
        <span class="proc-stop-title">${s.title}</span>
      </button>`).join('');
    const panels = window.siteConfig.process.map((s, i) => `
      <div class="proc-detail${i === 0 ? ' is-active' : ''}" data-i="${i}" aria-hidden="${i === 0 ? 'false' : 'true'}">
        <div class="proc-detail-top"><h3>${s.title}</h3><span class="proc-dur">${s.duration}</span></div>
        <p>${s.desc}</p>
      </div>`).join('');
    host.innerHTML = `
      <div class="proc-stepper" role="tablist" aria-label="ขั้นตอนการทำงาน">${stops}</div>
      <div class="proc-detail-stack" aria-live="polite">${panels}</div>`;
  }

  function setupProcessStepper() {
    const host = document.getElementById('proc-list');
    if (!host) return;
    const stops = host.querySelectorAll('.proc-stop');
    const panels = host.querySelectorAll('.proc-detail');
    if (!stops.length || !panels.length) return;

    const show = (i) => {
      stops.forEach(b => {
        const active = Number(b.dataset.i) === i;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      panels.forEach(p => {
        const active = Number(p.dataset.i) === i;
        p.classList.toggle('is-active', active);
        p.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
    };

    stops.forEach(b => {
      const i = Number(b.dataset.i);
      b.addEventListener('mouseenter', () => show(i));
      b.addEventListener('focus', () => show(i));
      b.addEventListener('click', () => show(i));
    });
  }

  /* ───────── Contact channels ───────── */
  function channels() {
    const c = window.siteConfig.contact;
    const out = [];
    if (c.email) out.push({
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>`,
      label: 'Email', value: c.email, href: `mailto:${c.email}?subject=สนใจปรึกษาโปรเจค`, go: 'ส่งข้อความ',
    });
    if (c.instagram) out.push({
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
      label: 'Instagram', value: `@${c.instagram}`, href: c.instagramUrl, go: 'ทักทาย DM',
    });
    if (c.phone) out.push({
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
      label: 'Phone', value: c.phoneDisplay || c.phone, href: `tel:${tel(c.phone)}`, go: 'โทรหา',
    });
    if (c.linkedin) out.push({
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
      label: 'LinkedIn', value: c.linkedin, href: c.linkedinUrl, go: 'เชื่อมต่อ',
    });
    return out;
  }

  function renderContact() {
    const host = document.getElementById('chan-list');
    if (!host || !window.siteConfig) return;
    host.innerHTML = channels().map((ch, i) => `
      <a class="chan reveal${i ? ' d' + i : ''}" href="${ch.href}" target="_blank" rel="noopener">
        <span class="chan-ico">${ch.icon}</span>
        <span class="chan-main"><span class="l">${ch.label}</span><span class="v">${ch.value}</span></span>
        <span class="chan-go">${ch.go}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
        </span>
      </a>`).join('');
  }

  function renderFooterContact() {
    const host = document.getElementById('footer-contact');
    if (!host || !window.siteConfig) return;
    const c = window.siteConfig.contact;
    const out = [];
    if (c.email) out.push(`<li><a href="mailto:${c.email}">${c.email}</a></li>`);
    if (c.phone) out.push(`<li><a href="tel:${tel(c.phone)}">${c.phoneDisplay || c.phone}</a></li>`);
    if (c.instagram) out.push(`<li><a href="${c.instagramUrl}" target="_blank" rel="noopener">Instagram</a></li>`);
    if (c.linkedin) out.push(`<li><a href="${c.linkedinUrl}" target="_blank" rel="noopener">LinkedIn</a></li>`);
    host.innerHTML = out.join('');
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

  /* ───────── Stats ───────── */
  function setupStats() {
    if (!window.siteConfig) return;
    const s = window.siteConfig.stats;
    const map = { 'stat-projects': s.projects, 'stat-years': s.yearsExp, 'stat-clients': s.clients };
    Object.keys(map).forEach(id => {
      const el = document.getElementById(id);
      if (el && map[id] != null) el.textContent = map[id] + '+';
    });
  }

  /* ───────── Nav ───────── */
  function setupNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const topbar = document.querySelector('.topbar');
    const onScroll = () => {
      const scrolled = window.scrollY > 20;
      nav.classList.toggle('is-stuck', scrolled);
      if (topbar) topbar.classList.toggle('is-hidden', scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ───────── Mobile menu ───────── */
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

  /* ───────── Reveal on scroll ───────── */
  function setupReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ───────── Smooth scroll ───────── */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
      });
    });
  }

  /* ───────── Loader ───────── */
  function runLoader() {
    const loader = document.getElementById('loader');
    const fill = document.getElementById('loader-fill');
    const finish = () => document.documentElement.classList.add('is-loaded');

    if (!loader || !fill) { finish(); return; }

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      loader.classList.add('is-done');
      finish();
      return;
    }

    document.body.style.overflow = 'hidden';
    let progress = 0;
    const tick = setInterval(() => {
      progress += Math.random() * 14 + 8;
      if (progress >= 100) {
        progress = 100; fill.style.width = '100%'; clearInterval(tick);
        setTimeout(() => {
          loader.classList.add('is-done');
          document.body.style.overflow = '';
          finish();
        }, 220);
      } else {
        fill.style.width = progress + '%';
      }
    }, 90);
  }

})();
