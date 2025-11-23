let numbers = [42, 15, 7, 88, 23, 91, 5, 34];
let currentNumbers = [...numbers];

function renderNumbers(arr) {
    const list = document.getElementById('numberList');
    list.innerHTML = '';
    arr.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        list.appendChild(li);
    });
    currentNumbers = [...arr];
}

function sortAsc() {
    const sorted = [...currentNumbers].sort((a, b) => a - b);
    renderNumbers(sorted);
}

function sortDesc() {
    const sorted = [...currentNumbers].sort((a, b) => b - a);
    renderNumbers(sorted);
}

function sortReset() {
    renderNumbers(numbers);
}

document.addEventListener('DOMContentLoaded', function() {
    renderNumbers(numbers);
    
    const ascBtn = document.getElementById('sortAscBtn');
    const descBtn = document.getElementById('sortDescBtn');
    const resetBtn = document.getElementById('sortResetBtn');
    
    if (ascBtn) ascBtn.addEventListener('click', sortAsc);
    if (descBtn) descBtn.addEventListener('click', sortDesc);
    if (resetBtn) resetBtn.addEventListener('click', sortReset);
});