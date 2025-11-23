document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const registrationModal = document.getElementById('registrationModal');
    const registrationForm = document.getElementById('registrationForm');
    const togglePasswordBtn = document.getElementById('togglePasswordBtn');
    const passwordInput = document.getElementById('password');

    let isPasswordVisible = false;

    // Открытие модального окна
    openModalBtn.addEventListener('click', () => {
        registrationModal.showModal();
        document.getElementById('name').focus(); // Устанавливаем фокус для доступности
    });

    // Закрытие модального окна
    const closeModal = () => registrationModal.close();
    closeModalBtn.addEventListener('click', closeModal);
    cancelModalBtn.addEventListener('click', closeModal);

    // Закрытие по клику на backdrop
    registrationModal.addEventListener('click', (e) => {
        if (e.target === registrationModal) closeModal();
    });

    // Показ/скрытие пароля
    const hidePassword = () => {
        if (isPasswordVisible) {
            passwordInput.type = 'password';
            isPasswordVisible = false;
            togglePasswordBtn.setAttribute('aria-label', 'Показать пароль');
        }
    };

    togglePasswordBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        passwordInput.type = 'text';
        isPasswordVisible = true;
        togglePasswordBtn.setAttribute('aria-label', 'Скрыть пароль');
    });

    togglePasswordBtn.addEventListener('pointerup', hidePassword);
    togglePasswordBtn.addEventListener('pointerleave', hidePassword);

    // Валидация одного поля
    const validateField = (field) => {
        const errorElement = document.getElementById(field.id + '-error');
        const isValid = field.checkValidity();

        if (!isValid) {
            field.classList.add('invalid');
            field.classList.remove('valid');
            field.setAttribute('aria-invalid', 'true');
            errorElement.textContent = field.validationMessage;
            errorElement.hidden = false;
        } else {
            field.classList.add('valid');
            field.classList.remove('invalid');
            field.removeAttribute('aria-invalid');
            errorElement.hidden = true;
            errorElement.textContent = '';
        }
        return isValid;
    };

    // Проверка при потере фокуса
    registrationForm.querySelectorAll('input').forEach((input) => {
        input.addEventListener('blur', () => validateField(input));
    });

    // Отправка формы
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        registrationForm.querySelectorAll('input').forEach((input) => {
            if (!validateField(input)) isValid = false;
        });

        if (isValid) {
            const formData = new FormData(registrationForm);
            const data = Object.fromEntries(formData.entries());
            console.log('Данные формы:', data);
            alert('Регистрация успешна!');
            registrationForm.reset();
            // Сброс стилей валидации
            registrationForm.querySelectorAll('input').forEach((input) => {
                input.classList.remove('valid', 'invalid');
                input.removeAttribute('aria-invalid');
            });
            closeModal();
        } else {
            const firstInvalid = registrationForm.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });
});