function checkDivision(n, x, y) {
    const result = n % x === 0 && n % y === 0;
    return `n = ${n}, x = ${x}, y = ${y} => ${result}`;
}

function updateDivisionResult() {
    const nInput = document.getElementById('n');
    const xInput = document.getElementById('x');
    const yInput = document.getElementById('y');
    const resultElement = document.getElementById('divisionResult');

    const n = parseInt(nInput.value);
    const x = parseInt(xInput.value);
    const y = parseInt(yInput.value);

    if (isNaN(n) || isNaN(x) || isNaN(y)) {
        resultElement.textContent = 'Введите корректные числа';
        return;
    }

    const result = checkDivision(n, x, y);
    resultElement.textContent = result;
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
    <h3>5. Деление</h3>
    <p>
        Напишите код, который проверяет, делится ли нацело число <code>n</code> на два числа <code>x</code> И <code>y</code>. Все входные данные - положительные ненулевые числа и хранятся в переменных.
    </p>
    <div class="example">
        <p><strong>Пример вывода:</strong></p>
        <pre>> n =   3, x = 1, y = 3 =>  true<br>> n =  12, x = 2, y = 6 =>  true<br>> n = 100, x = 5, y = 3 => false<br>> n =  12, x = 7, y = 5 => false</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="division-checker task5-division-checker">
            <div class="input-group task5-input-group">
                <label for="n">n:</label>
                <input type="number" id="n" value="12" placeholder="Введите n">
            </div>
            <div class="input-group task5-input-group">
                <label for="x">x:</label>
                <input type="number" id="x" value="2" placeholder="Введите x">
            </div>
            <div class="input-group task5-input-group">
                <label for="y">y:</label>
                <input type="number" id="y" value="6" placeholder="Введите y">
            </div>
            <button class="solve-btn task5-solve-btn" onclick="updateDivisionResult()">Проверить</button>
            <div class="result-output task5-result-output">
                <pre id="divisionResult">Введите числа и нажмите "Проверить"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn5" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode5()">Показать код</button>
        <pre id="functionCode5" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function checkDivision(n, x, y) {
    const result = n % x === 0 &amp;&amp; n % y === 0;
    return \`n = \${n}, x = \${x}, y = \${y} => \${result}\`;
}</pre>
    </div>
</div>
`);