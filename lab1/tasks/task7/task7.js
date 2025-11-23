function absValue(num) {
    return num < 0 ? -num : num;
}

function updateAbsoluteResult() {
    const input = document.getElementById('absInput');
    const output = document.getElementById('absResult');
    const num = parseFloat(input.value);

    if (isNaN(num)) {
        output.textContent = 'Введите корректное число';
        return;
    }

    const result = absValue(num);
    output.textContent = result;
    console.log(`absValue(${num}) → ${result}`);
}