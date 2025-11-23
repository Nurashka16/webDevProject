function checkTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        const perimeter = a + b + c;
        const s = perimeter / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
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
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    const resultEl = document.getElementById('triangleResult');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultEl.textContent = 'Введите корректные числа';
        return;
    }

    const res = checkTriangle(a, b, c);

    if (res.exists) {
        const output = `> треугольник существует\n> периметр = ${res.perimeter}\n> Площадь = ${res.area}\n> Соотношение = ${res.ratio}`;
        resultEl.textContent = output;
        console.log(output);
    } else {
        const output = '> треугольника не существует';
        resultEl.textContent = output;
        console.log(output);
    }
}