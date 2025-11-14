function convertTemperature(temp, currentGradus) {
    if (currentGradus === 'C') {
        const fahrenheit = (temp * 9 / 5) + 32;
        return fahrenheit.toFixed(4) + ' F';
    } else if (currentGradus === 'F') {
        const celsius = (temp - 32) * 5 / 9;
        return celsius.toFixed(4) + ' C';
    }
    return 'Invalid input';
}

function updateTemperatureResult() {
    const tempInput = document.getElementById('inputTemp');
    const unitSelect = document.getElementById('fromUnit');
    const resultElement = document.getElementById('temperatureResult');

    const temp = parseFloat(tempInput.value);
    const unit = unitSelect.value;

    if (isNaN(temp)) {
        resultElement.textContent = 'Введите корректное число';
        return;
    }

    const result = convertTemperature(temp, unit);
    resultElement.textContent = result;
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
    <h3>1. Функция конвертации температуры</h3>
    <p>
        Напишите функцию <code>convertTemperature</code>, которая принимает два параметра: значение температуры и направление преобразования. Функция возвращает в виде строки температуру в других единицах измерения.
    </p>
    <div class="example">
        <p><strong>Пример работы:</strong></p>
        <pre>convertTemperature(32, 'toC') → '0 C'<br>convertTemperature(10, 'toF') → '50 F'</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="temperature-converter task1-temperature-converter">
            <!-- Выбор исходной единицы -->
            <div class="select-wrapper task1-select-wrapper">
                <select id="fromUnit">
                    <option value="C">Градус Цельсия</option>
                    <option value="F">Градус Фаренгейта</option>
                </select>
            </div>

            <!-- Ввод значения -->
            <div class="input-box task1-input-box">
                <input type="number" id="inputTemp" value="-15" placeholder="Введите температуру">
            </div>

            <!-- Кнопка "Посчитать" -->
            <button class="solve-btn task1-solve-btn" onclick="updateTemperatureResult()">Посчитать</button>
            <div class="result-output task1-result-output">
                <pre id="temperatureResult">Выберите градус и введите температуру и нажмите "Посчитать"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn1" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode1()">Показать код</button>
        <pre id="functionCode1" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function convertTemperature(temp, currentGradus) {
    if (currentGradus === 'C') {
        const fahrenheit = (temp * 9 / 5) + 32;
        return fahrenheit.toFixed(4) + ' F';
    } else if (currentGradus === 'F') {
        const celsius = (temp - 32) * 5 / 9;
        return celsius.toFixed(4) + ' C';
    }
    return 'Invalid input';
}</pre>
    </div>
</div>
`);