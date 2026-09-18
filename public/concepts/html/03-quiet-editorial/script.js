document.querySelector('.appointment-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const fields = [...form.querySelectorAll('input[required]')];
  fields.forEach(field => field.closest('label')?.classList.toggle('invalid', !field.checkValidity()));
  const status = form.querySelector('.form-status');
  const valid = fields.every(field => field.checkValidity());
  status.className = `form-status ${valid ? 'success' : 'error'}`;
  status.textContent = valid
    ? 'Спасибо. Это демонстрационная форма макета; отправка будет доступна после реализации.'
    : 'Проверьте обязательные поля и формат контактных данных.';
});

document.querySelectorAll('.appointment-form input, .appointment-form textarea').forEach(field => {
  field.addEventListener('input', () => field.closest('label')?.classList.remove('invalid'));
});
