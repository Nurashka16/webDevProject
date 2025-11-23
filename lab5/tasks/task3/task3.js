async function handleTemperatureSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById('submitTempBtn');
    const resultElement = document.getElementById('tempResult');
    const classroomInput = document.getElementById('classroom');
    const tempInput = document.getElementById('temperature');

    const classroom = classroomInput.value.trim();
    const temperature = parseFloat(tempInput.value);

    if (!classroom) {
        showToast('❌ Введите номер аудитории', 'error');
        classroomInput.focus();
        return;
    }
    if (isNaN(temperature)) {
        showToast('❌ Введите корректную температуру', 'error');
        tempInput.focus();
        return;
    }

    // Блокируем форму
    submitBtn.disabled = true;
    resultElement.textContent = '🔄 Отправка данных...';
    resultElement.style.color = 'var(--text-color)';

    try {
        const response = await fetch('http://95.163.242.125/temp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                class: classroom,   
                temp: temperature   
            })
        });

        const data = await response.json();

        // === ОСНОВНОЕ ИЗМЕНЕНИЕ: ПРОВЕРКА ТЕКСТА ОТВЕТА ===
        if (response.ok && data.message === "We got it. It's nice!") {
            // Успех: точное совпадение
            showToast('✅ ' + data.message, 'success');
            resultElement.textContent = '✅ ' + data.message;
            resultElement.style.color = 'var(--secondary-color)';
            form.reset(); // Очищаем форму
        } else {
            // Любая другая ситуация — ошибка
            const errorMsg = data.message || `Ошибка сервера: ${response.status}`;
            showToast('❌ ' + errorMsg, 'error');
            resultElement.textContent = '❌ ' + errorMsg;
            resultElement.style.color = '#e53935';
        }

    } catch (error) {
        console.error('Ошибка сети:', error);
        const errorMsg = '❌ Не удалось отправить данные. Проверьте подключение.';
        showToast(errorMsg, 'error');
        resultElement.textContent = errorMsg;
        resultElement.style.color = '#e53935';
    } finally {
        submitBtn.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('temperatureForm');
    if (form) {
        form.addEventListener('submit', handleTemperatureSubmit);
    }
});