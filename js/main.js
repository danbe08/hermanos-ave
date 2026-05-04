/* ── Hermanos AVE · main.js ───────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── AGE GATE ──────────────────────────────────────────── */
  const ageGate = document.getElementById('age-gate');
  if (ageGate) {
    const confirmed = sessionStorage.getItem('age-confirmed');
    if (confirmed) {
      ageGate.classList.add('hidden');
    }

    const yesBtn = document.getElementById('age-yes');
    const noBtn  = document.getElementById('age-no');

    if (yesBtn) {
      yesBtn.addEventListener('click', () => {
        sessionStorage.setItem('age-confirmed', 'true');
        ageGate.classList.add('hidden');
      });
    }
    if (noBtn) {
      noBtn.addEventListener('click', () => {
        document.body.innerHTML = `
          <div style="min-height:100vh;background:#0e1a0a;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;font-family:'Montserrat',sans-serif;">
            <p style="color:rgba(240,234,216,0.4);font-size:0.6rem;letter-spacing:4px;">We\'re sorry, this content is not available in your region or for your age.</p>
          </div>`;
      });
    }
  }

  /* ─── MOBILE NAV ─────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── ACTIVE NAV LINK ────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─── SCROLL REVEAL ──────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ─── CONTACT FORM ───────────────────────────────────────── */
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('visible');
    });
  }

});
