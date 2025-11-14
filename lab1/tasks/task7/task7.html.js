function getAbsoluteValue(num) {
    return num < 0 ? -num : num;
}

function updateAbsoluteResult() {
    const inputElement = document.getElementById('absInput');
    const resultElement = document.getElementById('absResult');

    const num = parseFloat(inputElement.value);

    if (isNaN(num)) {
        resultElement.textContent = 'Введите корректное число';
        return;
    }

    const result = getAbsoluteValue(num);
    resultElement.textContent = result;
}

function toggleFunctionCode7() {
    const codeElement = document.getElementById('functionCode7');
    const button = document.getElementById('toggleCodeBtn7');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task7">
    <h3>7. Абсолютное значение</h3>
    <p>
        Напишите функцию <code>absValue</code> без <code>Math.abs(x)</code>, которая в качестве параметра принимает число и возвращает его абсолютное значение (по модулю).
    </p>
    <div class="example">
        <p><strong>Пример работы:</strong></p>
        <pre>absValue(-2) → 2<br>absValue(100) → 100<br>absValue(0) → 0</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="absolute-calculator task7-absolute-calculator">
            <div class="input-group task7-input-group">
                <label for="absInput">Введите число:</label>
                <input type="number" id="absInput" value="-5" placeholder="Введите число">
            </div>
            <button class="solve-btn task7-solve-btn" onclick="updateAbsoluteResult()">Посчитать</button>
            <div class="result-output task7-result-output">
                <pre id="absResult">Введите число и нажмите "Посчитать"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn7" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode7()">Показать код</button>
        <pre id="functionCode7" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function getAbsoluteValue(num) {
    return num < 0 ? -num : num;
}</pre>
    </div>
</div>
`);