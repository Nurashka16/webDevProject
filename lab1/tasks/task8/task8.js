function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateRandomResult() {
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);
    const output = document.getElementById('randomResult');

    if (isNaN(min) || isNaN(max)) {
        output.textContent = 'Введите корректные числа';
        return;
    }

    if (min > max) {
        output.textContent = 'Минимум должен быть меньше или равен максимуму';
        return;
    }

    const result = randomNumber(min, max);
    output.textContent = result;
    console.log(`randomNumber(${min}, ${max}) → ${result}`);
}