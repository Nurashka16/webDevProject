function toBeCloseTo(num1, num2) {
    // Проверяем, насколько близки числа, учитывая погрешность
    const diff = Math.abs(num1 - num2);
    const epsilon = Number.EPSILON * Math.max(1, Math.abs(num1), Math.abs(num2));
    return diff < epsilon;
}

function updateFloatResult() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultElement = document.getElementById('floatResult');

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Введите корректные числа';
        return;
    }

    const result = toBeCloseTo(num1, num2);
    resultElement.textContent = result;
}

function toggleFunctionCode11() {
    const codeElement = document.getElementById('functionCode11');
    const button = document.getElementById('toggleCodeBtn11');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task11">
    <h3>11. Равенство чисел с плавающей запятой</h3>
    <p>
        Напишите функцию <code>toBeCloseTo</code>, которая принимает два числа (<code>num1</code> и <code>num2</code>) в качестве аргументов и возвращает <code>true</code>, если они приблизительно равны, и <code>false</code> в противном случае. Может понадобиться <code>Number.EPSILON</code>.
    </p>
    <div class="example">
        <p><strong>Пример работы:</strong></p>
        <pre>toBeCloseTo(0.1, 0.10000000000000001) → true<br>toBeCloseTo(0.1, 0.2) → false<br>toBeCloseTo(1, 1.0000000000000002) → true</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="float-comparator task11-float-comparator">
            <div class="input-group task11-input-group">
                <label for="num1">num1:</label>
                <input type="number" id="num1" value="0.1" placeholder="Число 1">
            </div>
            <div class="input-group task11-input-group">
                <label for="num2">num2:</label>
                <input type="number" id="num2" value="0.2" placeholder="Число 2">
            </div>
            <button class="solve-btn task11-solve-btn" onclick="updateFloatResult()">Сравнить</button>
            <div class="result-output task11-result-output">
                <pre id="floatResult">Введите числа и нажмите "Сравнить"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn11" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode11()">Показать код</button>
        <pre id="functionCode11" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function toBeCloseTo(num1, num2) {
    // Проверяем, насколько близки числа, учитывая погрешность
    const diff = Math.abs(num1 - num2);
    const epsilon = Number.EPSILON * Math.max(1, Math.abs(num1), Math.abs(num2));
    return diff < epsilon;
}</pre>
    </div>
</div>
`);