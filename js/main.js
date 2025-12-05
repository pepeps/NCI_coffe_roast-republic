// Shared site helpers
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
  }
});
