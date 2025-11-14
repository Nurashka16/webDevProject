function generateTree(height) {
    let result = [];

    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            if (i % 2 === 1) {
                // Нечетная строка — *
                line += '*';
            } else {
                // Четная строка — #
                line += '#';
            }
        }
        result.push(line);
    }

    // Добавляем ствол
    result.push('||');

    return result.join('\n');
}

function updateTreeResult() {
    const inputElement = document.getElementById('treeHeight');
    const resultElement = document.getElementById('treeResult');

    const height = parseInt(inputElement.value);

    if (isNaN(height) || height <= 0) {
        resultElement.textContent = 'Введите положительное число';
        return;
    }

    const result = generateTree(height);
    resultElement.textContent = result;
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

document.write(`
<div class="task task4">
    <h3>4. Елка</h3>
    <p>
        Напишите программу, которая создает одну строку, представляющую елку, используя для разделения строк символы новой строки. В слоях елки чередуются "*" и "#", и на каждой строке символов больше на один, а в последнем слое ствол из символов <code>||</code>.
    </p>
    <div class="example">
        <p><strong>Пример вывода:</strong></p>
        <pre>
*
##
***
####
*****
######
*******
########
*********
##########
***********
############
||</pre>
    </div>

    <!-- Решение задачи -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="tree-generator task4-tree-generator">
            <div class="input-group task4-input-group">
                <label for="treeHeight">Высота елки:</label>
                <input type="number" id="treeHeight" value="6" placeholder="Введите высоту">
            </div>
            <button class="solve-btn task4-solve-btn" onclick="updateTreeResult()">Нарисовать</button>
            <div class="result-output task4-result-output">
                <pre id="treeResult">Введите высоту и нажмите "Нарисовать"</pre>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn4" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode4()">Показать код</button>
        <pre id="functionCode4" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">function generateTree(height) {
    let result = [];

    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            if (i % 2 === 1) {
                // Нечетная строка — *
                line += '*';
            } else {
                // Четная строка — #
                line += '#';
            }
        }
        result.push(line);
    }

    // Добавляем ствол
    result.push('||');

    return result.join('\\n');
}</pre>
    </div>
</div>
`);