function convertTemperature(temp, direction) {
    if (direction === 'toC') {
        const celsius = (temp - 32) * 5 / 9;
        return Math.round(celsius) + ' C';
    }
    else if (direction === 'toF') {
        const fahrenheit = (temp * 9 / 5) + 32;
        return Math.round(fahrenheit) + ' F';
    }
    return 'Invalid input';
}

function updateTemperatureResult() {
    const tempInput = document.getElementById('inputTemp');
    const unitSelect = document.getElementById('fromUnit');
    const resultElement = document.getElementById('temperatureResult');

    const temp = parseFloat(tempInput.value);
    const unit = unitSelect.value;

    if (isNaN(temp)) {
        resultElement.textContent = 'Введите корректное число';
        return;
    }

    const direction = unit === 'C' ? 'toF' : 'toC';

    const result = convertTemperature(temp, direction);
    resultElement.textContent = result;
    console.log('Результат конвертации:', result);
}