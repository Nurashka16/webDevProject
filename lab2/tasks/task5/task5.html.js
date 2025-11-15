// Task 5: Координаты
function showCoords(e) {
    const x = e.clientX;
    const y = e.clientY;
    const target = e.target.tagName.toLowerCase();
    const output = document.getElementById('coordsOutput');
    output.textContent = 'X: ' + x + ', Y: ' + y + ' - ' + target;
}

function toggleFunctionCode5() {
    const codeElement = document.getElementById('functionCode5');
    const button = document.getElementById('toggleCodeBtn5');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task5">
    <h3>5. Координаты</h3>
    <p>При любом нажатии указателем (pointer) выводить на экран координаты этого нажатия относительно viewport и на каком элементе это произошло.
        Например X: 102, Y: 73 - h1.</p>
    


    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="coords-calculator task5-coords-calculator">
            <div id="coordsOutput">Нажмите в любом месте</div>
        </div>
    </div>

        <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn5" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode5()">Показать код</button>
        <pre id="functionCode5" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function showCoords(e) {
    const x = e.clientX;
    const y = e.clientY;
    const target = e.target.tagName.toLowerCase();
    const output = document.getElementById('coordsOutput');
    output.textContent = 'X: ' + x + ', Y: ' + y + ' - ' + target;
}</pre>
    </div>
</div>
`);

// Добавляем обработчик на body
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', showCoords);
});