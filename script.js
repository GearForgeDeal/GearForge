// GearForge - Site JavaScript
// Mobile nav, smooth interactions, and affiliate link tracking helpers

document.addEventListener('DOMContentLoaded', () => {

  // ── MOBILE NAV TOGGLE ──
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  }

  // ── STICKY HEADER SHADOW ON SCROLL ──
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 20
        ? '0 4px 32px rgba(0,0,0,0.5)'
        : 'none';
    }, { passive: true });
  }

  // ── FADE-IN ANIMATIONS ──
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animItems = document.querySelectorAll(
    '.category-card, .product-card, .blog-card, .article-cta-box'
  );
  animItems.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    observer.observe(el);
  });

  // ── FILTER BUTTONS (Category Pages) ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // In a real site, you'd filter products here by data-category attribute
    });
  });

  // ── AFFILIATE LINK CLICK TRACKER (optional, for analytics) ──
  // Replace with your Google Analytics event tracking if needed
  document.querySelectorAll('.btn-amazon, [data-affiliate]').forEach(link => {
    link.addEventListener('click', (e) => {
      const productName = link.closest('.product-card, .article-cta-box')
        ?.querySelector('.product-name, h4')?.textContent || 'Unknown';
      // console.log(`[Affiliate] Clicked: ${productName}`);
      // gtag('event', 'click', { event_category: 'affiliate', event_label: productName });
    });
  });

  // ── NEWSLETTER FORM ──
  const nlForm = document.querySelector('.nl-form');
  if (nlForm) {
    const btn   = nlForm.querySelector('.btn');
    const input = nlForm.querySelector('.nl-input');
    btn?.addEventListener('click', () => {
      const email = input?.value?.trim();
      if (!email || !email.includes('@')) {
        input?.focus();
        return;
      }
      // Replace with your Mailchimp/ConvertKit/etc. form action
      alert(`✅ Thanks! We'll send deals to ${email}`);
      if (input) input.value = '';
    });
  }

});

/* ============================================================
  HOW TO USE YOUR AFFILIATE LINKS:
  1. Sign up at affiliate-program.amazon.com
  2. Get your unique affiliate tag (e.g. gearforge-21)
  3. Find any product on Amazon, click "Get link" in SiteStripe
  4. Replace "gearforge0d-20" throughout this site with your tag
  5. Or use the short link format:
     https://www.amazon.com/dp/ASIN?tag=gearforge-21
  6. For EU traffic (.de, .fr, .it etc.) use Amazon OneLink to
     auto-redirect to local stores and earn commissions there too.
============================================================ */
