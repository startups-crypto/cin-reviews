const form = document.querySelector('.appointment-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  const required = [...form.querySelectorAll('[required]')];
  required.forEach((field) => field.classList.remove('invalid'));

  const invalid = required.filter((field) => {
    const value = field.value.trim();
    if (!value) return true;
    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;
    if (field.name === 'age' && (Number(value) < 16 || Number(value) > 110)) return true;
    return false;
  });

  if (invalid.length) {
    invalid.forEach((field) => field.classList.add('invalid'));
    status.textContent = 'Проверьте обязательные поля.';
    status.className = 'form-status error';
    invalid[0].focus();
    return;
  }

  status.textContent = 'Данные заполнены. Отправка будет подключена при реализации сайта.';
  status.className = 'form-status success';
});
