const form = document.querySelector('.appointment-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll('input, textarea')];
  fields.forEach(field => field.closest('label')?.classList.toggle('invalid', !field.checkValidity()));
  const status = form.querySelector('.form-status');
  const invalid = fields.find(field => !field.checkValidity());
  if (invalid) {
    status.textContent = 'Проверьте обязательные поля.';
    status.className = 'form-status error';
    invalid.focus();
  } else {
    status.textContent = 'Спасибо. Это демонстрационная форма макета.';
    status.className = 'form-status success';
  }
});

document.querySelectorAll('.appointment-form input, .appointment-form textarea').forEach(field => {
  field.addEventListener('input', () => field.closest('label')?.classList.remove('invalid'));
});
