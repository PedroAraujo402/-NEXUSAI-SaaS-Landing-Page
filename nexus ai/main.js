/* =========================================================
   NEXUS AI — main.js
   Vanilla JS: Navbar, Scroll Animations, Pricing Toggle, FAQ
   ========================================================= */

'use strict';

/* ── Navbar: sticky + shrink + mobile toggle ── */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const links    = document.getElementById('navLinks');

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 20);
    lastScroll = y;
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();


/* ── Scroll Animations (Intersection Observer) ── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -48px 0px',
    }
  );

  // Stagger children inside grids/lists for a cascade effect
  const staggerParents = document.querySelectorAll(
    '.features-grid, .pricing-grid, .faq-list, .hero-content, .mockup-wrapper'
  );

  staggerParents.forEach((parent) => {
    const children = parent.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.08}s`;
    });
  });

  elements.forEach((el) => observer.observe(el));
})();


/* ── Pricing Toggle: Monthly / Annual ── */
(function initPricingToggle() {
  const btn    = document.getElementById('billingToggle');
  const prices = document.querySelectorAll('.price-val[data-monthly]');

  if (!btn || !prices.length) return;

  let isAnnual = false;

  btn.addEventListener('click', () => {
    isAnnual = !isAnnual;
    btn.setAttribute('aria-checked', String(isAnnual));

    prices.forEach((el) => {
      // Animate out
      el.classList.add('updating');

      setTimeout(() => {
        const val = isAnnual ? el.dataset.annual : el.dataset.monthly;
        el.textContent = val;
        // Animate in
        el.classList.remove('updating');
      }, 180);
    });
  });
})();


/* ── FAQ Accordion ── */
(function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  if (!items.length) return;

  items.forEach((item) => {
    const btn    = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');

    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all other items
      items.forEach((other) => {
        if (other !== item) {
          const otherBtn = other.querySelector('.faq-q');
          const otherAns = other.querySelector('.faq-a');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.classList.remove('open');
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.classList.toggle('open', !isOpen);
    });
  });
})();


/* ── Subtle Cursor Glow (desktop only) ── */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(123,92,240,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
    will-change: transform;
  `;
  document.body.appendChild(glow);

  let raf;
  let mx = -999, my = -999;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;

    if (!raf) {
      raf = requestAnimationFrame(() => {
        glow.style.left = mx + 'px';
        glow.style.top  = my + 'px';
        raf = null;
      });
    }
  });

  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
})();


/* ── Mockup live-updating delta counters (micro-detail) ── */
(function animateMockStats() {
  const stats = document.querySelectorAll('.stat-delta');
  if (!stats.length) return;

  // Tiny shimmer on the mockup stats every few seconds
  let tick = 0;
  setInterval(() => {
    tick++;
    stats.forEach((el, i) => {
      if (tick % (i + 3) === 0) {
        el.style.opacity = '0.4';
        setTimeout(() => { el.style.opacity = '1'; el.style.transition = 'opacity 0.5s'; }, 300);
      }
    });
  }, 2800);
})();
