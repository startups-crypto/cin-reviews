const form = document.querySelector('.contact form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  const required = [...form.querySelectorAll('[required]')];
  required.forEach(field => field.classList.toggle('invalid', !field.value.trim() || !field.checkValidity()));
  if (required.some(field => field.classList.contains('invalid'))) {
    status.textContent = 'Please complete the required fields with valid details.';
    status.className = 'form-status error';
    return;
  }
  status.textContent = 'Preview only — your request has not been sent.';
  status.className = 'form-status success';
});
form?.querySelectorAll('input,textarea').forEach(field => field.addEventListener('input', () => field.classList.remove('invalid')));
