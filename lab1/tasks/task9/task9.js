function getRandomElement(arr) {
    const randomIndex = randomNumber(0, arr.length - 1);
    return arr[randomIndex];
}

function sampleArray(arr, num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(getRandomElement(arr));
    }
    return result;
}

function updateArrayResult() {
    const arrayInput = document.getElementById('arrayInput');
    const countInput = document.getElementById('count');
    const output = document.getElementById('arrayResult');

    const arrayText = arrayInput.value.trim();
    const count = parseInt(countInput.value, 10);

    if (!arrayText || isNaN(count) || count < 0) {
        output.textContent = 'Введите корректные данные';
        return;
    }

    const arr = arrayText.split(',').map(item => {
        const num = parseFloat(item.trim());
        if (isNaN(num)) {
            output.textContent = 'Массив должен содержать только числа';
            return null;
        }
        return num;
    });

    if (arr.includes(null) || arr.length === 0) {
        return;
    }

    const result = sampleArray(arr, count);
    const resultStr = JSON.stringify(result);
    output.textContent = resultStr;
    console.log(`sampleArray([${arr.join(',')}], ${count}) → ${resultStr}`);
}