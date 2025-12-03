document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <header class="header">
            <nav class="nav">
                <ul class="nav__list">
                    <li><a href="../../js-Nurashka16/index.html">Главная</a></li>
                    <li><a href="../../js-Nurashka16/lab1/lab1.html">Лаба 1</a></li>
                    <li><a href="../../js-Nurashka16/lab2/lab2.html">Лаба 2</a></li>
                    <li><a href="../../js-Nurashka16/lab3/lab3.html">Лаба 3</a></li>
                    <li><a href="../../js-Nurashka16/lab4/index.html">Лаба 4</a></li>
                    <li><a href="../../js-Nurashka16/lab5/index.html">Лаба 5</a></li>
                    <li><a href="../../js-Nurashka16/lab6/index.html">Лаба 6</a></li>
                    <li class="theme-toggle-container">
                        <button id="themeToggleTop" class="theme-toggle-btn" aria-label="Переключить тему">
                            🌓
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});