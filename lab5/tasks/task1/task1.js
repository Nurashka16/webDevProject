function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('aria-atomic', 'true');
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <span>${message}</span>
        <button class="close-toast" aria-label="Закрыть уведомление">&times;</button>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    const closeToast = () => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            if (container.children.length === 0) {
                container.remove();
            }
        }, 300);
    };

    toast.querySelector('.close-toast').addEventListener('click', closeToast);

    // Автозакрытие через 4 секунды
    const autoCloseTimer = setTimeout(closeToast, 4000);

    // Отмена автозакрытия при наведении или фокусе
    const cancelAutoClose = () => {
        clearTimeout(autoCloseTimer);
        toast.removeEventListener('mouseenter', cancelAutoClose);
        toast.removeEventListener('focusin', cancelAutoClose);
    };

    toast.addEventListener('mouseenter', cancelAutoClose);
    toast.addEventListener('focusin', cancelAutoClose);
}

async function mockApiCall(isSuccess) {
    await new Promise(resolve => setTimeout(resolve, 600));
    if (isSuccess) {
        return { message: "Операция выполнена успешно!" };
    } else {
        throw new Error("Произошла ошибка при обработке запроса.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const resultEl = document.getElementById('jobResult');

    document.getElementById('showSuccessToast')?.addEventListener('click', async () => {
        try {
            const { message } = await mockApiCall(true);
            showToast(message, 'success');
            resultEl.textContent = '✅ Уведомление показано внизу';
        } catch (err) {
            showToast('Неожиданная ошибка', 'error');
            resultEl.textContent = '⚠️ Ошибка выполнения';
        }
    });

    document.getElementById('showErrorToast')?.addEventListener('click', async () => {
        try {
            await mockApiCall(false);
        } catch (err) {
            showToast(err.message, 'error');
            resultEl.textContent = '❌ Уведомление об ошибке показано';
        }
    });
});