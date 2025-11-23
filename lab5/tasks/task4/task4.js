function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Обновляем иконку верхней кнопки
    const topBtn = document.getElementById('themeToggleTop');
    if (topBtn) {
        topBtn.textContent = theme === 'light' ? '🌞' : '🌙';
    }
    
    // Обновляем текст нижней кнопки
    const bottomBtn = document.getElementById('localThemeToggle');
    if (bottomBtn) {
        bottomBtn.textContent = theme === 'light' 
            ? 'Переключить на тёмную' 
            : 'Переключить на светлую';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Получаем сохранённую тему из localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    updateTheme(savedTheme);

    const topBtn = document.getElementById('themeToggleTop');
    const bottomBtn = document.getElementById('localThemeToggle');

    if (topBtn) {
        topBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'light' ? 'dark' : 'light';
            updateTheme(next);
        });
    }

    if (bottomBtn) {
        bottomBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'light' ? 'dark' : 'light';
            updateTheme(next);
        });
    }
});