const form = document.querySelector('.appointment-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = [...form.querySelectorAll('[required]')];
  fields.forEach(field => field.closest('label').classList.remove('invalid'));
  const invalid = fields.filter(field => !field.value.trim() || !field.checkValidity());
  const date = form.elements.date;
  if (date.value.trim() && !/^\d{2}\.\d{2}\.\d{4}$/.test(date.value.trim()) && !invalid.includes(date)) invalid.push(date);
  invalid.forEach(field => field.closest('label').classList.add('invalid'));
  status.className = 'form-status ' + (invalid.length ? 'error' : 'success');
  status.textContent = invalid.length ? 'Пожалуйста, проверьте обязательные поля.' : 'Заявка готова к отправке. Это демонстрационный макет.';
});

document.querySelectorAll('.faq-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    item.querySelector('summary span').textContent = item.open ? '−' : '+';
  });
});
