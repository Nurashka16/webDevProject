function myFilterArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function updateFilterResult() {
    const arrayInput = document.getElementById('filterArray');
    const funcInput = document.getElementById('filterFunc');
    const resultElement = document.getElementById('filterResult');

    const arrayText = arrayInput.value.trim();
    const funcText = funcInput.value.trim();

    if (!arrayText || !funcText) {
        resultElement.textContent = 'Введите массив и функцию фильтра';
        return;
    }

    const arr = arrayText.split(',').map(item => item.trim());

    try {
        let filterFunc;

        // Проверяем, есть ли "function" в тексте
        if (funcText.includes('function')) {
            // Извлекаем имя функции и тело
            const funcMatch = funcText.match(/function\s*(\w*)\s*\(([^)]*)\)\s*{([\s\S]*?)}/);
            if (funcMatch) {
                const paramName = funcMatch[2].trim(); // параметр (например, item)
                const funcBody = funcMatch[3].trim(); // тело функции

                // Убираем return, если он есть
                const bodyWithoutReturn = funcBody.replace(/^return\s+/, '').replace(/;$/, '');

                // Создаём функцию
                filterFunc = new Function(paramName, `return ${bodyWithoutReturn}`);
            } else {
                throw new Error("Не удалось распарсить функцию");
            }
        } else {
            // Просто тело функции
            filterFunc = new Function('item', `return ${funcText}`);
        }

        const result = myFilterArray(arr, filterFunc);
        resultElement.textContent = JSON.stringify(result);
    } catch (e) {
        resultElement.textContent = 'Ошибка в функции фильтра';
    }
}

function toggleFunctionCode10() {
    const codeElement = document.getElementById('functionCode10');
    const button = document.getElementById('toggleCodeBtn10');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task10">
    <h3>10. Фильтрация массива</h3>
    <p>
        Напишите функцию, которая является аналогом метода <code>filter</code> у массива. Функция в качестве параметров принимает сам массив и функцию-фильтр, а возвращает новый массив с элементами прошедшими отбор. Элемент прошел отбор, если функция-фильтр вернула истину для него.
    </p>
    <div class="example">
        <p><strong>Пример работы:</strong></p>
        <pre>function startsWithV(item) {<br>  return item.startsWith('V')<br>}<br><br>myFilterArray(['Short', 'VeryLong'], startsWithV) → ['VeryLong']<br><br>function isLongerThan5(item) {<br>  return item.length > 5<br>}<br><br>myFilterArray(['Short', 'VeryLong'], isLongerThan5) → ['VeryLong']</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="array-filter task10-array-filter">
            <div class="input-group task10-input-group">
                <label for="filterArray">Массив:</label>
                <input type="text" id="filterArray" value="Short,VeryLong" placeholder="Введите через запятую">
            </div>
            <div class="input-group task10-input-group">
                <label for="filterFunc">Фильтр:</label>
                <textarea id="filterFunc" placeholder="Функция (например: item.startsWith('V') или function(item) { return item.length > 5; })">function isLongerThan5(item) {
  return item.length > 5
}</textarea>
            </div>
            <button class="solve-btn task10-solve-btn" onclick="updateFilterResult()">Фильтровать</button>
            <div class="result-output task10-result-output">
                <pre id="filterResult">Введите массив и фильтр (можно ввести полную функцию или только тело) и нажмите "Фильтровать"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn10" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode10()">Показать код</button>
        <pre id="functionCode10" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function myFilterArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}</pre>
    </div>
</div>
`);