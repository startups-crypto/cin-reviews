const form = document.querySelector('.intake-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const required = [...form.querySelectorAll('[required]')];
  required.forEach(field => field.setAttribute('aria-invalid', String(!field.checkValidity())));
  const status = form.querySelector('.form-status');
  if (required.some(field => !field.checkValidity())) {
    status.textContent = 'Заполните обязательные поля, чтобы продолжить.';
    return;
  }
  status.textContent = 'Демо-форма заполнена. В дизайн-макете данные не отправляются.';
});
document.querySelectorAll('.faq-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('.faq-list details').forEach(other => { if (other !== item) other.open = false; });
  });
});
