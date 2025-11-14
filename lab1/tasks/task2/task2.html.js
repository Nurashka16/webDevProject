function checkTriangle(a, b, c) {
    // Проверка существования треугольника
    if (a + b > c && a + c > b && b + c > a) {
        const perimeter = a + b + c;
        const s = (a + b + c) / 2; // Полупериметр
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Формула Герона
        const ratio = perimeter / area;

        return {
            exists: true,
            perimeter: perimeter.toFixed(5),
            area: area.toFixed(5),
            ratio: ratio.toFixed(5)
        };
    } else {
        return {
            exists: false
        };
    }
}

function updateTriangleResult() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const resultElement = document.getElementById('triangleResult');

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        resultElement.textContent = 'Введите корректные числа';
        return;
    }

    const result = checkTriangle(sideA, sideB, sideC);

    if (result.exists) {
        resultElement.textContent = `> треугольник существует\n> периметр = ${result.perimeter}\n> Площадь = ${result.area}\n> Соотношение = ${result.ratio}`;
    } else {
        resultElement.textContent = `> треугольника не существует`;
    }
}

function toggleFunctionCode2() {
    const codeElement = document.getElementById('functionCode2');
    const button = document.getElementById('toggleCodeBtn2');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task2">
    <h3>2. Треугольник</h3>
    <p>
        По трем сторонам треугольника проверить возможность его существования, если такой треугольник возможен, то рассчитать его периметр, площадь и отношение периметра к площади. Для решения задачи вам нужна формула Герона и метод <code>Math.sqrt()</code>, который возвращает квадратный корень числа.
    </p>
    <div class="example">
        <p><strong>В консоль требуется вывести:</strong></p>
        <pre>> треугольник существует<br>> периметр = __<br>> Площадь = __<br>> Соотношение = __<br>> треугольника не существует</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="triangle-calculator task2-triangle-calculator">
            <div class="input-group task2-input-group">
                <label for="sideA">Сторона A:</label>
                <input type="number" id="sideA" value="3" placeholder="Введите сторону A">
            </div>
            <div class="input-group task2-input-group">
                <label for="sideB">Сторона B:</label>
                <input type="number" id="sideB" value="4" placeholder="Введите сторону B">
            </div>
            <div class="input-group task2-input-group">
                <label for="sideC">Сторона C:</label>
                <input type="number" id="sideC" value="5" placeholder="Введите сторону C">
            </div>
            <button class="solve-btn task2-solve-btn" onclick="updateTriangleResult()">Проверить</button>
            <div class="result-output task2-result-output">
                <pre id="triangleResult">Введите стороны и нажмите "Проверить"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn2" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode2()">Показать код</button>
        <pre id="functionCode2" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function checkTriangle(a, b, c) {
    // Проверка существования треугольника
    if (a + b > c &amp;&amp; a + c > b &amp;&amp; b + c > a) {
        const perimeter = a + b + c;
        const s = (a + b + c) / 2; // Полупериметр
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Формула Герона
        const ratio = perimeter / area;

        return {
            exists: true,
            perimeter: perimeter.toFixed(5),
            area: area.toFixed(5),
            ratio: ratio.toFixed(5)
        };
    } else {
        return {
            exists: false
        };
    }
}</pre>
    </div>
</div>
`);