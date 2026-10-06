/* ═══════════════════════════════════════════════════
   ABSOLUTE FIT — main.js
═══════════════════════════════════════════════════ */

// ─── Navbar: scroll-aware ─────────────────────────
const navbar  = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');

function updateNavbar() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });


// ─── Mobile menu ─────────────────────────────────
function openMenu() {
  navLinks.classList.add('open');
  navOverlay.classList.add('active');
  navToggle.classList.add('active');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('active');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  if (navLinks.classList.contains('open')) closeMenu();
  else openMenu();
});

navOverlay.addEventListener('click', closeMenu);

// Close on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});


// ─── Smooth scroll for anchor links ──────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


// ─── Scroll-triggered animations ─────────────────
const animatedEls = document.querySelectorAll('[data-animate]');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.12,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const delay = parseInt(el.dataset.delay || 0);

    setTimeout(() => {
      el.classList.add('in-view');
    }, delay);

    observer.unobserve(el);
  });
}, observerOptions);

animatedEls.forEach(el => observer.observe(el));


// ─── Active nav link on scroll ────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        const href = a.getAttribute('href');
        if (href === `#${id}`) {
          a.style.color = 'var(--yellow)';
        } else {
          a.style.color = '';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));


// ─── Inquiry Modal ───────────────────────────────
const inquiryModal = document.getElementById('inquiryModal');
const inquiryOverlay = document.getElementById('inquiryModalOverlay');
const inquiryCloseBtn = document.getElementById('inquiryModalClose');
const inquirySubmitBtn = document.getElementById('inquirySubmit');
const openInquiryBtns = document.querySelectorAll('#openInquiryBtn');
const inquiryNameInput = document.getElementById('inquiryName');

const inquiryState = { type: null, day: null, time: null, name: '' };

function openInquiryModal() {
  inquiryModal.classList.add('active');
  inquiryOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  inquiryNameInput.focus();
}

function closeInquiryModal() {
  inquiryModal.classList.remove('active');
  inquiryOverlay.classList.remove('active');
  document.body.style.overflow = '';
  resetInquiryForm();
}

function resetInquiryForm() {
  inquiryState.type = null;
  inquiryState.day = null;
  inquiryState.time = null;
  inquiryState.name = '';
  inquiryNameInput.value = '';
  document.querySelectorAll('.inquiry-btn').forEach(btn => btn.classList.remove('active'));
}

// Open modal from buttons
openInquiryBtns.forEach(btn => {
  btn.addEventListener('click', openInquiryModal);
});

// Close modal
inquiryCloseBtn.addEventListener('click', closeInquiryModal);
inquiryOverlay.addEventListener('click', closeInquiryModal);

// Prevent close when clicking inside modal
inquiryModal.addEventListener('click', (e) => e.stopPropagation());

// Handle button selections
document.querySelectorAll('.inquiry-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const group = this.parentElement.id;
    const value = this.dataset.value;

    // Remove active from same group
    this.parentElement.querySelectorAll('.inquiry-btn').forEach(b => b.classList.remove('active'));

    // Add active to clicked button
    this.classList.add('active');

    // Update state
    if (group === 'inquiryType') inquiryState.type = value;
    if (group === 'inquiryDay') inquiryState.day = value;
    if (group === 'inquiryTime') inquiryState.time = value;
  });
});

// Handle name input
inquiryNameInput.addEventListener('input', function() {
  inquiryState.name = this.value.trim();
});

// Submit form
inquirySubmitBtn.addEventListener('click', function() {
  if (!inquiryState.type || !inquiryState.day || !inquiryState.time) {
    alert('Please select all options');
    return;
  }

  // Build WhatsApp message
  const message = `Hi Absolute Fit,\n\nI'm interested in: ${inquiryState.type}\nPreferred Day: ${inquiryState.day}\nPreferred Time: ${inquiryState.time}${inquiryState.name ? '\nName: ' + inquiryState.name : ''}`;

  // Encode message
  const encodedMsg = encodeURIComponent(message);

  // Open WhatsApp
  window.open(`https://wa.me/917217759688?text=${encodedMsg}`, '_blank');

  // Close modal
  closeInquiryModal();
});
