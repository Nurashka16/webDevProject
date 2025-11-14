function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function sampleArray(arr, num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(getRandomElement(arr));
    }
    return result;
}

function updateArrayResult() {
    const arrayInput = document.getElementById('arrayInput');
    const countInput = document.getElementById('count');
    const resultElement = document.getElementById('arrayResult');

    const arrayText = arrayInput.value.trim();
    const count = parseInt(countInput.value);

    if (!arrayText || isNaN(count) || count < 0) {
        resultElement.textContent = 'Введите корректные данные';
        return;
    }

    const arr = arrayText.split(',').map(item => {
        const num = parseFloat(item.trim());
        if (isNaN(num)) {
            resultElement.textContent = 'Массив должен содержать только числа';
            return null;
        }
        return num;
    });

    if (arr.includes(null)) {
        return;
    }

    const result = sampleArray(arr, count);
    resultElement.textContent = JSON.stringify(result);
}

function toggleFunctionCode9() {
    const codeElement = document.getElementById('functionCode9');
    const button = document.getElementById('toggleCodeBtn9');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task9">
    <h3>9. Значения из массива</h3>
    <p>
        Используя функцию из прошлой задачи, реализовать функцию, которая возвращает случайные значения из массива в заданном количестве в виде нового массива.
    </p>
    <div class="example">
        <p><strong>Пример работы:</strong></p>
        <pre>sampleArray([1,2,3,4], 2) → [3, 4]<br>randomNumber([1,2,3,4], 3) → [2, 2, 1]</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="array-sampler task9-array-sampler">
            <div class="input-group task9-input-group">
                <label for="arrayInput">Массив:</label>
                <input type="text" id="arrayInput" value="1,2,3,4" placeholder="Введите числа через запятую">
            </div>
            <div class="input-group task9-input-group">
                <label for="count">Кол-во:</label>
                <input type="number" id="count" value="2" placeholder="Сколько выбрать">
            </div>
            <button class="solve-btn task9-solve-btn" onclick="updateArrayResult()">Выбрать</button>
            <div class="result-output task9-result-output">
                <pre id="arrayResult">Введите массив и кол-во и нажмите "Выбрать"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn9" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode9()">Показать код</button>
        <pre id="functionCode9" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function sampleArray(arr, num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(getRandomElement(arr));
    }
    return result;
}</pre>
    </div>
</div>
`);