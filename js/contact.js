// Contact page form handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (!form || !statusEl) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusEl.textContent = 'Thank you! Your message has been sent.';
    form.reset();
  });
});
