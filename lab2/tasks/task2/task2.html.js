// Task 2: Like / Dislike
function toggleLikeDislike(type) {
    const likeBtn = document.getElementById('likeBtn2');
    const dislikeBtn = document.getElementById('dislikeBtn2');

    if (type === 'like') {
        if (likeBtn.classList.contains('active')) {
            likeBtn.classList.remove('active');
            likeBtn.setAttribute('aria-pressed', 'false');
        } else {
            likeBtn.classList.add('active');
            likeBtn.setAttribute('aria-pressed', 'true');
            // Снять дизлайк
            dislikeBtn.classList.remove('active');
            dislikeBtn.setAttribute('aria-pressed', 'false');
        }
    } else if (type === 'dislike') {
        if (dislikeBtn.classList.contains('active')) {
            dislikeBtn.classList.remove('active');
            dislikeBtn.setAttribute('aria-pressed', 'false');
        } else {
            dislikeBtn.classList.add('active');
            dislikeBtn.setAttribute('aria-pressed', 'true');
            // Снять лайк
            likeBtn.classList.remove('active');
            likeBtn.setAttribute('aria-pressed', 'false');
        }
    }
}

function toggleFunctionCode2() {
    const codeElement = document.getElementById('functionCode2');
    const button = document.getElementById('toggleCodeBtn2');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task2">
    <h3>2. Like / Dislike</h3>
    <p>Повторите кнопку из прошлого задания, но добавьте вторую с иконкой пальца вниз или разбитого сердечка. Теперь при нажатии на одну из них она помечается как активированная, при повторном - деактивированной. Но они не могут быть активны одновременно. По-прежнему не забывайте про доступность и текст.</p>
    
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="like-dislike-calculator task2-like-dislike-calculator">
            <button id="likeBtn2" class="like-btn2 active" aria-label="Поставить лайк" aria-pressed="true" onclick="toggleLikeDislike('like')">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="like-icon2" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                </svg>
            </button>
            <button id="dislikeBtn2" class="dislike-btn2" aria-label="Поставить дизлайк" aria-pressed="false" onclick="toggleLikeDislike('dislike')">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="dislike-icon2" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn2" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode2()">Показать код</button>
        <pre id="functionCode2" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function toggleLikeDislike(type) {
    const likeBtn = document.getElementById('likeBtn2');
    const dislikeBtn = document.getElementById('dislikeBtn2');

    if (type === 'like') {
        if (likeBtn.classList.contains('active')) {
            likeBtn.classList.remove('active');
            likeBtn.setAttribute('aria-pressed', 'false');
        } else {
            likeBtn.classList.add('active');
            likeBtn.setAttribute('aria-pressed', 'true');
            // Снять дизлайк
            dislikeBtn.classList.remove('active');
            dislikeBtn.setAttribute('aria-pressed', 'false');
        }
    } else if (type === 'dislike') {
        if (dislikeBtn.classList.contains('active')) {
            dislikeBtn.classList.remove('active');
            dislikeBtn.setAttribute('aria-pressed', 'false');
        } else {
            dislikeBtn.classList.add('active');
            dislikeBtn.setAttribute('aria-pressed', 'true');
            // Снять лайк
            likeBtn.classList.remove('active');
            likeBtn.setAttribute('aria-pressed', 'false');
        }
    }
}</pre>
    </div>
</div>
`);