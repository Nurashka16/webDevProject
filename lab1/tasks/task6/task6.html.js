function calculateMaxSandwiches(bread, cheese) {
    const maxBreadSandwiches = Math.floor(bread / 2);
    const maxSandwiches = Math.min(maxBreadSandwiches, cheese);
    return maxSandwiches;
}

function updateSandwichResult() {
    const breadInput = document.getElementById('bread');
    const cheeseInput = document.getElementById('cheese');
    const resultElement = document.getElementById('sandwichResult');

    const bread = parseInt(breadInput.value);
    const cheese = parseInt(cheeseInput.value);

    if (isNaN(bread) || isNaN(cheese)) {
        resultElement.textContent = 'Введите корректные числа';
        return;
    }

    const result = calculateMaxSandwiches(bread, cheese);
    resultElement.textContent = result;
}

function toggleFunctionCode6() {
    const codeElement = document.getElementById('functionCode6');
    const button = document.getElementById('toggleCodeBtn6');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task6">
    <h3>6. Сэндвичи с сыром</h3>
    <p>
        Для сэндвича требуется два ломтика хлеба и один ломтик сыра. Напишите функцию, которая посчитает максимально возможное количество сэндвичей. Информация о количестве ингридиентов хранится в объекте.
    </p>
    <div class="example">
        <p><strong>Пример работы:</strong></p>
        <pre>countSandwiches({bread: 5, cheese: 6}) → 2</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="sandwich-calculator task6-sandwich-calculator">
            <div class="input-group task6-input-group">
                <label for="bread">Хлеб:</label>
                <input type="number" id="bread" value="5" placeholder="Кол-во хлеба">
            </div>
            <div class="input-group task6-input-group">
                <label for="cheese">Сыр:</label>
                <input type="number" id="cheese" value="6" placeholder="Кол-во сыра">
            </div>
            <button class="solve-btn task6-solve-btn" onclick="updateSandwichResult()">Посчитать</button>
            <div class="result-output task6-result-output">
                <pre id="sandwichResult">Введите кол-во ингредиентов и нажмите "Посчитать"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn6" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode6()">Показать код</button>
        <pre id="functionCode6" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function calculateMaxSandwiches(bread, cheese) {
    const maxBreadSandwiches = Math.floor(bread / 2);
    const maxSandwiches = Math.min(maxBreadSandwiches, cheese);
    return maxSandwiches;
}</pre>
    </div>
</div>
`);