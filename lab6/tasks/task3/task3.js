class Temperature {
    static MIN_CELSIUS = -273.16;
    static MAX_CELSIUS = 1.41e32;

    constructor(celsius) {
        this.celsius = celsius;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error('Температура должна быть числом');
        }
        if (value < Temperature.MIN_CELSIUS || value > Temperature.MAX_CELSIUS) {
            throw new Error(
                `Температура должна быть в диапазоне от ${Temperature.MIN_CELSIUS} до ${Temperature.MAX_CELSIUS} °C`
            );
        }
        this._celsius = value;
    }

    toKelvin() {
        return (this.celsius + 273.15).toFixed(2);
    }

    toFahrenheit() {
        return (this.celsius * 9 / 5 + 32).toFixed(2);
    }

    toString() {
        return `${this.toKelvin()} K`;
    }

    static add(temp1, temp2) {
        this._validateInstance(temp1, temp2);
        return new Temperature(temp1.celsius + temp2.celsius);
    }

    static subtract(temp1, temp2) {
        this._validateInstance(temp1, temp2);
        return new Temperature(temp1.celsius - temp2.celsius);
    }

    static _validateInstance(...temps) {
        for (const temp of temps) {
            if (!(temp instanceof Temperature)) {
                throw new Error('Аргумент должен быть экземпляром класса Temperature');
            }
        }
    }
}

function validateTemperatureInput(input) {
    const value = parseFloat(input.value.trim());
    if (isNaN(value)) {
        throw new Error('Введите числовое значение');
    }
    return value;
}

function formatTemperature(celsiusValue, unit) {
    switch (unit) {
        case 'kelvin':
            return `${(celsiusValue + 273.15).toFixed(2)} K`;
        case 'fahrenheit':
            return `${(celsiusValue * 9 / 5 + 32).toFixed(2)} °F`;
        default:
            return `${celsiusValue.toFixed(2)} °C`;
    }
}

function updateDisplay(input, displayElement, unit) {
    try {
        const celsius = validateTemperatureInput(input);
        displayElement.textContent = formatTemperature(celsius, unit);
    } catch (error) {
        displayElement.textContent = 'Ошибка';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('task3-container');
    if (!container) return;

    const temp1Input = container.querySelector('#temp1');
    const temp2Input = container.querySelector('#temp2');
    const displayTemp1 = container.querySelector('#displayTemp1');
    const displayTemp2 = container.querySelector('#displayTemp2');
    const unitRadios = container.querySelectorAll('input[name="unit"]');
    const addBtn = container.querySelector('#addBtn');
    const subtractBtn = container.querySelector('#subtractBtn');
    const resultContainer = container.querySelector('#resultContainer');
    const resultValue = container.querySelector('#resultValue');
    const resultKelvin = container.querySelector('#resultKelvin');
    const errorEl = container.querySelector('#tempError');

    let currentUnit = 'celsius';

    unitRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            currentUnit = radio.value;
            updateDisplay(temp1Input, displayTemp1, currentUnit);
            updateDisplay(temp2Input, displayTemp2, currentUnit);
        });
    });

    temp1Input.addEventListener('input', () => updateDisplay(temp1Input, displayTemp1, currentUnit));
    temp2Input.addEventListener('input', () => updateDisplay(temp2Input, displayTemp2, currentUnit));

    function performOperation(isAddition) {
        errorEl.hidden = true;
        resultContainer.hidden = true;

        try {
            const t1 = new Temperature(validateTemperatureInput(temp1Input));
            const t2 = new Temperature(validateTemperatureInput(temp2Input));

            const resultTemp = isAddition
                ? Temperature.add(t1, t2)
                : Temperature.subtract(t1, t2);

            resultValue.textContent = formatTemperature(resultTemp.celsius, currentUnit);
            resultKelvin.textContent = resultTemp.toString();
            resultContainer.hidden = false;
        } catch (error) {
            errorEl.textContent = error.message;
            errorEl.hidden = false;
        }
    }

    addBtn?.addEventListener('click', () => performOperation(true));
    subtractBtn?.addEventListener('click', () => performOperation(false));

    updateDisplay(temp1Input, displayTemp1, currentUnit);
    updateDisplay(temp2Input, displayTemp2, currentUnit);
});