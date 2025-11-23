function myFilterArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function startsWithV(item) {
    return typeof item === 'string' && item.startsWith('V');
}

function isLongerThan5(item) {
    return typeof item === 'string' && item.length > 5;
}

function isEvenNumber(item) {
    const num = parseFloat(item);
    return !isNaN(num) && num % 2 === 0;
}

function updateFilterResult() {
    const arrayInput = document.getElementById('filterArray');
    const filterSelect = document.getElementById('filterSelect');
    const output = document.getElementById('filterResult');

    const arrayText = arrayInput.value.trim();
    const filterName = filterSelect.value;

    if (!arrayText) {
        output.textContent = 'Введите массив';
        return;
    }

    const arr = arrayText.split(',').map(s => s.trim());

    let filterFunc;
    let funcName;

    switch (filterName) {
        case 'startsWithV':
            filterFunc = startsWithV;
            funcName = 'startsWithV';
            break;
        case 'isLongerThan5':
            filterFunc = isLongerThan5;
            funcName = 'isLongerThan5';
            break;
        case 'isEvenNumber':
            filterFunc = isEvenNumber;
            funcName = 'isEvenNumber';
            break;
        default:
            output.textContent = 'Выберите фильтр';
            return;
    }

    const result = myFilterArray(arr, filterFunc);
    const resultStr = JSON.stringify(result);
    output.textContent = resultStr;
    console.log(`myFilterArray([${arr.map(s => `"${s}"`).join(',')}], ${funcName}) → ${resultStr}`);
}