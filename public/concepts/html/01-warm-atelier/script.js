// This file adds only review-state behavior to the standalone desktop mockup.
// The production hero keeps its existing 3D scene and constructor interaction.
const form = document.getElementById('consultation-form');
const message = form?.querySelector('.form-message');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const required = [...form.querySelectorAll('[required]')];
  let invalid = false;
  required.forEach((field) => {
    const bad = !field.value.trim() || (field.type === 'email' && !field.validity.valid);
    field.setAttribute('aria-invalid', String(bad));
    invalid ||= bad;
  });
  if (invalid) {
    message.textContent = 'Пожалуйста, заполните обязательные поля.';
    required.find((field) => field.getAttribute('aria-invalid') === 'true')?.focus();
    return;
  }
  form.classList.add('is-success');
  message.textContent = 'Спасибо. Мы свяжемся с вами для подтверждения визита.';
});

// Expose the final height for deterministic full-page PNG export.
window.addEventListener('load', () => {
  document.fonts.ready.then(() => {
    document.documentElement.dataset.pageHeight = String(document.documentElement.scrollHeight);
  });
});
