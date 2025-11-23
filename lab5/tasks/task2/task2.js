async function loadGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    const resultElement = document.getElementById('galleryResult');

    if (!galleryContainer || !resultElement) {
        console.error('❌ Элементы галереи не найдены в DOM');
        return;
    }

    // Сброс перед загрузкой
    galleryContainer.innerHTML = '';
    resultElement.textContent = '🔄 Начинаем загрузку изображений...';
    console.log('🔄 Начинаем загрузку изображений...');

    const maxAttempts = 3;
    let data = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const message = `⏳ Попытка ${attempt} из ${maxAttempts}...`;
            resultElement.textContent = message;
            console.log(message);

            const response = await fetch('http://95.163.242.125/images', {
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status} ${response.statusText}`);
            }

            data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error('Ответ не является массивом');
            }

            const successMsg = `✅ Загружено ${data.length} изображений`;
            resultElement.textContent = successMsg;
            console.log(successMsg, data);
            break;

        } catch (error) {
            const errorMsg = `❌ Попытка ${attempt} завершилась ошибкой: ${error.message}`;
            console.error(errorMsg);

            if (attempt === maxAttempts) {
                // Последняя попытка — показываем финальную ошибку
                const finalErrorMsg = '❌ Все попытки исчерпаны. Не удалось загрузить изображения.';
                resultElement.textContent = finalErrorMsg;
                console.error(finalErrorMsg);

                // Показываем тост (предполагается, что showToast доступна из task1)
                if (typeof showToast === 'function') {
                    showToast('❌ Не удалось загрузить изображения. Все попытки исчерпаны.', 'error');
                } else {
                    alert(finalErrorMsg);
                }

                galleryContainer.innerHTML = '<div class="error-message">Ошибка загрузки</div>';
                return;
            }

            // Ждём перед следующей попыткой
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
    }

    if (data && data.length > 0) {
        data.forEach(photo => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${photo.url}" alt="${photo.alt || 'Изображение'}"
                    onerror="this.onerror=null; this.src='https://via.placeholder.com/150/cccccc/666666?text=Ошибка'">
                <div class="item-title">${photo.alt || 'Без названия'}</div>
                <div class="description">${photo.description || 'Описание отсутствует'}</div>
            `;
            galleryContainer.appendChild(item);
        });
    } else {
        resultElement.textContent = 'ℹ️ Сервер вернул пустой массив';
        console.log('ℹ️ Сервер вернул пустой массив');
        galleryContainer.innerHTML = '<div class="no-images">Изображения не найдены</div>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadGallery();

    const refreshBtn = document.getElementById('refreshGalleryBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            console.log('🔁 Пользователь нажал "Обновить галерею"');
            loadGallery();
        });
    }
});