function generateRandomNumber(min, max) {
    // Генерируем случайное число в диапазоне [min, max] включительно
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateRandomResult() {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const resultElement = document.getElementById('randomResult');

    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max)) {
        resultElement.textContent = 'Введите корректные числа';
        return;
    }

    if (min > max) {
        resultElement.textContent = 'Минимум должен быть меньше или равен максимуму';
        return;
    }

    const result = generateRandomNumber(min, max);
    resultElement.textContent = result;
}

function toggleFunctionCode8() {
    const codeElement = document.getElementById('functionCode8');
    const button = document.getElementById('toggleCodeBtn8');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task8">
    <h3>8. Случайные числа</h3>
    <p>
        Используя методы объекта Math создать функцию, которая возвращает целое случайно сгенерированное число в диапазоне от <code>min</code> до <code>max</code>.
    </p>
    <div class="example">
        <p><strong>Пример работы:</strong></p>
        <pre>randomNumber(0, 10) → 3<br>randomNumber(-10, 10) → -4</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="random-generator task8-random-generator">
            <div class="input-group task8-input-group">
                <label for="min">min:</label>
                <input type="number" id="min" value="0" placeholder="Минимум">
            </div>
            <div class="input-group task8-input-group">
                <label for="max">max:</label>
                <input type="number" id="max" value="10" placeholder="Максимум">
            </div>
            <button class="solve-btn task8-solve-btn" onclick="updateRandomResult()">Сгенерировать</button>
            <div class="result-output task8-result-output">
                <pre id="randomResult">Введите диапазон и нажмите "Сгенерировать"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn8" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode8()">Показать код</button>
        <pre id="functionCode8" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function generateRandomNumber(min, max) {
    // Генерируем случайное число в диапазоне [min, max] включительно
    return Math.floor(Math.random() * (max - min + 1)) + min;
}</pre>
    </div>
</div>
`);