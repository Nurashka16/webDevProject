// Task 4: Сортировка
let numbers = [42, 15, 7, 88, 23, 91, 5, 34];

function renderNumbers(arr) {
    const list = document.getElementById('numberList');
    list.innerHTML = '';
    arr.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        list.appendChild(li);
    });
}

function sortAsc() {
    const sorted = [...numbers].sort((a, b) => a - b);
    renderNumbers(sorted);
}

function sortDesc() {
    const sorted = [...numbers].sort((a, b) => b - a);
    renderNumbers(sorted);
}

function sortReset() {
    renderNumbers(numbers);
}

function toggleFunctionCode4() {
    const codeElement = document.getElementById('functionCode4');
    const button = document.getElementById('toggleCodeBtn4');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderNumbers(numbers);
});

document.write(`
<div class="task task4">
    <h3>4. Сортировка</h3>
    <p>Добавьте три кнопки для сортировки по возрастанию, убыванию и возврату к исходному варианту. В js создайте массив со случайными числами (можно использовать функции из прошлой работы). Список (<ul>, <li>) для отображения чисел должен создаваться с помощью js (не использовать innerHTML). При нажатии на одну из кнопок сортировки на страницы обновляется отображение списка.</p>
    


    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="sort-calculator task4-sort-calculator">
            <div class="sort-controls">
                <button onclick="sortAsc()">По возрастанию</button>
                <button onclick="sortDesc()">По убыванию</button>
                <button onclick="sortReset()">Исходный порядок</button>
            </div>
            <ul id="numberList"></ul>
        </div>
    </div>

        <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn4" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode4()">Показать код</button>
        <pre id="functionCode4" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">let numbers = [42, 15, 7, 88, 23, 91, 5, 34];

function renderNumbers(arr) {
    const list = document.getElementById('numberList');
    list.innerHTML = '';
    arr.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        list.appendChild(li);
    });
}

function sortAsc() {
    const sorted = [...numbers].sort((a, b) => a - b);
    renderNumbers(sorted);
}

function sortDesc() {
    const sorted = [...numbers].sort((a, b) => b - a);
    renderNumbers(sorted);
}

function sortReset() {
    renderNumbers(numbers);
}</pre>
    </div>
</div>
`);