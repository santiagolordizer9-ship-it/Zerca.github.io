/* main.js — assets/js/main.js */
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  if (!toggle || !nav) return;

  // Initialize aria
  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu when clicking a nav link (mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

function submitReservation(e) {
  e.preventDefault();
  const nameInput = document.getElementById('res-name');
  const name = nameInput ? nameInput.value.trim() : '';
  alert(`Thanks ${name || 'guest'}! We received your reservation request. We will contact you to confirm.`);
  e.target.reset();
  return false;
}
