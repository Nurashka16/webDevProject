// 1. Like
const likeBtn = document.getElementById('likeBtn');
let isLiked = false;

likeBtn.addEventListener('click', function() {
    isLiked = !isLiked;
    if (isLiked) {
        likeBtn.classList.add('active');
        likeBtn.setAttribute('aria-pressed', 'true');
    } else {
        likeBtn.classList.remove('active');
        likeBtn.setAttribute('aria-pressed', 'false');
    }
});

// 2. Like / Dislike
const likeBtn2 = document.getElementById('likeBtn2');
const dislikeBtn2 = document.getElementById('dislikeBtn2');
let isLiked2 = false;
let isDisliked = false;

function resetButtons() {
    likeBtn2.classList.remove('active');
    dislikeBtn2.classList.remove('active');
    likeBtn2.setAttribute('aria-pressed', 'false');
    dislikeBtn2.setAttribute('aria-pressed', 'false');
}

likeBtn2.addEventListener('click', function() {
    if (isDisliked) {
        resetButtons();
    }
    isLiked2 = !isLiked2;
    if (isLiked2) {
        likeBtn2.classList.add('active');
        likeBtn2.setAttribute('aria-pressed', 'true');
    } else {
        likeBtn2.classList.remove('active');
        likeBtn2.setAttribute('aria-pressed', 'false');
    }
});

dislikeBtn2.addEventListener('click', function() {
    if (isLiked2) {
        resetButtons();
    }
    isDisliked = !isDisliked;
    if (isDisliked) {
        dislikeBtn2.classList.add('active');
        dislikeBtn2.setAttribute('aria-pressed', 'true');
    } else {
        dislikeBtn2.classList.remove('active');
        dislikeBtn2.setAttribute('aria-pressed', 'false');
    }
});

// 3. Корзина
const cartCounter = document.getElementById('cartCounter');
let cartCount = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartCounter.textContent = cartCount;
    });
});

// 4. Сортировка
const numberList = document.getElementById('numberList');
const sortAscBtn = document.getElementById('sortAsc');
const sortDescBtn = document.getElementById('sortDesc');
const sortResetBtn = document.getElementById('sortReset');

let numbers = [42, 15, 7, 88, 23, 91, 5, 34];

function renderNumbers(arr) {
    numberList.innerHTML = '';
    arr.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        numberList.appendChild(li);
    });
}

renderNumbers(numbers);

sortAscBtn.addEventListener('click', function() {
    const sorted = [...numbers].sort((a, b) => a - b);
    renderNumbers(sorted);
});

sortDescBtn.addEventListener('click', function() {
    const sorted = [...numbers].sort((a, b) => b - a);
    renderNumbers(sorted);
});

sortResetBtn.addEventListener('click', function() {
    renderNumbers(numbers);
});

// 5. Координаты
const coordsOutput = document.getElementById('coordsOutput');

document.body.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const target = e.target.tagName.toLowerCase();
    coordsOutput.textContent = `X: ${x}, Y: ${y} - ${target}`;
});