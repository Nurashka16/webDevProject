function toBeCloseTo(num1, num2) {
    const diff = Math.abs(num1 - num2);
    const epsilon = Number.EPSILON * Math.max(1, Math.abs(num1), Math.abs(num2));
    return diff < epsilon;
}

function updateFloatResult() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('floatResult');

    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = 'Введите корректные числа';
        return;
    }

    const result = toBeCloseTo(num1, num2);
    output.textContent = String(result);
    console.log(`toBeCloseTo(${num1}, ${num2}) → ${result}`);
}