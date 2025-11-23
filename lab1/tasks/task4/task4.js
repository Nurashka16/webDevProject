function generateTree(height) {
    let result = [];
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            if (i % 2 === 1) {
                line += '*';
            } else {
                line += '#';
            }
        }
        result.push(line);
    }
    result.push('||');
    return result;
}

function updateTreeResult() {
    const input = document.getElementById('treeHeight');
    const output = document.getElementById('treeResult');
    const height = parseInt(input.value, 10);

    if (isNaN(height) || height <= 0) {
        output.textContent = 'Введите положительное число';
        return;
    }

    const lines = generateTree(height);
    const text = lines.join('\n');
    output.textContent = text;

    // Вывод в консоль — построчно
    lines.forEach(line => console.log(line));
}