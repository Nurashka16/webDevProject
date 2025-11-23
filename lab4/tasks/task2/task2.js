function getData(errorProbability = 0.5, dataString) {
    const fullData = "Синтетические данные: " + dataString;

    return function(number) {
        if (typeof number !== 'number' || isNaN(number)) {
            return null;
        }
        return Math.random() < errorProbability ? null : fullData;
    };
}

function executeGetData() {
    const dataInput = document.getElementById('dataInput');
    const probabilityInput = document.getElementById('probabilityInput');
    const resultElement = document.getElementById('dataResult');

    const dataString = dataInput.value.trim();
    const prob = parseFloat(probabilityInput.value);

    if (dataString === '') {
        resultElement.textContent = 'Введите строку с данными';
        return;
    }

    if (isNaN(prob) || prob < 0 || prob > 1) {
        resultElement.textContent = 'Вероятность должна быть числом от 0 до 1';
        return;
    }

    const dataFn = getData(prob, dataString);
    const randomNum = Math.random() * 100; // любое число — для проверки типа

    const result = dataFn(randomNum);
    resultElement.textContent = result === null 
        ? 'Данные не получены (ошибка)' 
        : result;
}

// Подключение обработчика
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('getDataBtn');
    if (btn) {
        btn.addEventListener('click', executeGetData);
    }
});