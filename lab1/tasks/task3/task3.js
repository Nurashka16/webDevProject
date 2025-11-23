function generateFizzBuzz(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (i % 5 === 0) {
            result.push(`"${i} fizz buzz"`);
        } else if (i % 2 === 0) {
            result.push(`"${i} buzz"`);
        } else {
            result.push(`"${i} fizz"`);
        }
    }
    return result;
}

function updateFizzBuzzResult() {
    const inputElement = document.getElementById('fizzBuzzInput');
    const resultElement = document.getElementById('fizzBuzzResult');

    const num = parseInt(inputElement.value, 10);

    if (isNaN(num) || num < 0) {
        resultElement.textContent = 'Введите корректное целое число ≥ 0';
        return;
    }

    const lines = generateFizzBuzz(num);
    const output = lines.join('\n');
    resultElement.textContent = output;

    lines.forEach(line => console.log('>', line));
}