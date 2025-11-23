function checkDivision(n, x, y) {
    const result = n % x === 0 && n % y === 0;
    return `n = ${n}, x = ${x}, y = ${y} => ${result}`;
}

function updateDivisionResult() {
    const n = parseInt(document.getElementById('n').value, 10);
    const x = parseInt(document.getElementById('x').value, 10);
    const y = parseInt(document.getElementById('y').value, 10);
    const output = document.getElementById('divisionResult');

    if (isNaN(n) || isNaN(x) || isNaN(y) || x === 0 || y === 0) {
        output.textContent = 'Введите корректные положительные ненулевые числа';
        return;
    }

    const message = checkDivision(n, x, y);
    const resultWithPrefix = '> ' + message;

    output.textContent = message;
    console.log(resultWithPrefix);
}