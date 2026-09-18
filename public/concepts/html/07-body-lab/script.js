document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#consultation-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    for (const input of form.querySelectorAll('input[required]')) {
      const okay = input.checkValidity();
      input.setAttribute('aria-invalid', String(!okay));
      if (!okay) valid = false;
    }
    const message = form.querySelector('.form-message');
    if (valid) {
      form.classList.add('is-success');
      message.textContent = 'Спасибо. Мы свяжемся с вами, чтобы подтвердить время.';
    } else {
      form.classList.remove('is-success');
      message.textContent = 'Проверьте обязательные поля формы.';
    }
  });
  document.body.dataset.pageHeight = String(document.documentElement.scrollHeight);
});
