function generateFizzBuzz(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (i % 5 === 0) {
            result.push(`"${i} fizz buzz"`);
        } else if (i % 2 === 0) {
            result.push(`"${i} buzz"`);
        } else {
            result.push(`"${i} fizz"`);
        }
    }
    return result.join('\n');
}

function updateFizzBuzzResult() {
    const inputElement = document.getElementById('fizzBuzzInput');
    const resultElement = document.getElementById('fizzBuzzResult');

    const num = parseInt(inputElement.value);

    if (isNaN(num)) {
        resultElement.textContent = 'Введите корректное число';
        return;
    }

    const result = generateFizzBuzz(num);
    resultElement.textContent = result;
}

function toggleFunctionCode3() {
    const codeElement = document.getElementById('functionCode3');
    const button = document.getElementById('toggleCodeBtn3');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task3">
    <h3>3. Fizz-Buzz</h3>
    <p>
        Создайте переменную с целым числом и напишите цикл, который проходит от 0 до указанного в переменной значения и если текущное значение четно, то в консоль выводится <code>buzz</code>, если нечетно <code>fizz</code>, если число делится на 5 - <code>fizz buzz</code>.
    </p>
    <div class="example">
        <p><strong>Пример вывода:</strong></p>
        <pre>> "0 buzz"<br>> "1 fizz"<br>> "2 buzz"<br>> "3 fizz"<br>> "4 buzz"<br>> "5 fizz buzz"<br>...</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="fizzbuzz-calculator task3-fizzbuzz-calculator">
            <div class="input-group task3-input-group">
                <label for="fizzBuzzInput">Введите число:</label>
                <input type="number" id="fizzBuzzInput" value="10" placeholder="Введите число">
            </div>
            <button class="solve-btn task3-solve-btn" onclick="updateFizzBuzzResult()">Запустить</button>
            <div class="result-output task3-result-output">
                <pre id="fizzBuzzResult">Введите число и нажмите "Запустить"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn3" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode3()">Показать код</button>
        <pre id="functionCode3" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function generateFizzBuzz(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (i % 5 === 0) {
            result.push(\`"\${i} fizz buzz"\`);
        } else if (i % 2 === 0) {
            result.push(\`"\${i} buzz"\`);
        } else {
            result.push(\`"\${i} fizz"\`);
        }
    }
    return result.join('\\n');
}</pre>
    </div>
</div>
`);