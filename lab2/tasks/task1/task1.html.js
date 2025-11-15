// Task 1: Like
function toggleLike() {
    const likeBtn = document.getElementById('likeBtn');
    const isLiked = likeBtn.classList.contains('active');

    if (isLiked) {
        likeBtn.classList.remove('active');
        likeBtn.setAttribute('aria-pressed', 'false');
    } else {
        likeBtn.classList.add('active');
        likeBtn.setAttribute('aria-pressed', 'true');
    }
}

function toggleFunctionCode1() {
    const codeElement = document.getElementById('functionCode1');
    const button = document.getElementById('toggleCodeBtn1');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task1">
    <h3>1. Like</h3>
    <p>Реализовать кнопку с иконкой пальца вверх или сердечка (не забывайте про доступность и текст). При нажатии на эту кнопку она помечается как активированная. При повторном нажатии она становится деактивированной.</p>
    
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="like-calculator task1-like-calculator">
            <button id="likeBtn" class="like-btn" aria-label="Поставить лайк" onclick="toggleLike()">
              <svg class="like-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn1" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode1()">Показать код</button>
        <pre id="functionCode1" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function toggleLike() {
    const likeBtn = document.getElementById('likeBtn');
    const isLiked = likeBtn.classList.contains('active');
    
    if (isLiked) {
        likeBtn.classList.remove('active');
        likeBtn.setAttribute('aria-pressed', 'false');
    } else {
        likeBtn.classList.add('active');
        likeBtn.setAttribute('aria-pressed', 'true');
    }
}</pre>
    </div>
</div>
`);