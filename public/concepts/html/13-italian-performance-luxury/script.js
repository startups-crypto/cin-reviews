// Local preview only: no request or personal data is sent anywhere.
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const invalid = [...form.querySelectorAll('[required]')].filter(input => !input.checkValidity());
  form.querySelectorAll('input').forEach(input => { input.classList.toggle('invalid', invalid.includes(input)); input.setAttribute('aria-invalid', String(invalid.includes(input))); });
  const status = form.querySelector('.form-status');
  status.className = 'form-status ' + (invalid.length ? 'error' : 'success');
  status.textContent = invalid.length ? 'Please complete the highlighted fields.' : 'Preview complete. Your information has not been sent.';
  if (invalid.length) invalid[0].focus();
});
