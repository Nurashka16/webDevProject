// Task 3: Корзина
let cartCount = 0;

function updateCartCounter() {
    const counter = document.getElementById('cartCounter');
    counter.textContent = cartCount;
}

function addToCart(button) { // Принимаем саму кнопку
    cartCount++;
    updateCartCounter();
    
    // Анимация только у нажатой кнопки
    button.classList.add('added');
    setTimeout(() => {
        button.classList.remove('added');
    }, 300);
}

function toggleFunctionCode3() {
    const codeElement = document.getElementById('functionCode3');
    const button = document.getElementById('toggleCodeBtn3');

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}

document.write(`
<div class="task task3">
    <h3>3. Корзина</h3>
    <p>Сделайте несколько простых карточек с изображением, описанием и кнопкой “в корзину”. Также добавьте иконку корзины со счетчиком товаров (span) в header. Счетчик должен быть размещен в правом верхнем углу иконки. При нажатии на кнопку “в корзину” счетчик корзины увеличивается на 1.</p>
    
    <div class="solution-wrapper">
        <h3 class="solution-title">Решение:</h3>
        <div class="cart-calculator task3-cart-calculator">
            <div class="cart-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="cart-icon" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.88 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                <span id="cartCounter" class="cart-counter">0</span>
            </div>
            <div class="products-container">
                <div class="product-card">
                    <img src="https://www.adverti.ru/media/catalog/product/1/6/16614.30_14.jpg" alt="Футболка">
                    <p>Футболка</p>
                    <button class="add-to-cart-btn" data-id="1" onclick="addToCart(this)">В корзину</button>
                </div>
                <div class="product-card">
                    <img src="https://campus78.ru/wp-content/uploads/2024/06/dsc-8-2-scaled.jpg" alt="Шорты">
                    <p>Шорты</p>
                    <button class="add-to-cart-btn" data-id="2" onclick="addToCart(this)">В корзину</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Показ кода функции -->
    <div class="solution-wrapper">
        <h3 class="solution-title">Код функции:</h3>
        <button id="toggleCodeBtn3" class="solve-btn toggle-code-btn" onclick="toggleFunctionCode3()">Показать код</button>
        <pre id="functionCode3" style="display: none; background: #f0f9ff; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">let cartCount = 0;

function updateCartCounter() {
    const counter = document.getElementById('cartCounter');
    counter.textContent = cartCount;
}

function addToCart(button) {
    cartCount++;
    updateCartCounter();
    
    // Анимация только у нажатой кнопки
    button.classList.add('added');
    setTimeout(() => {
        button.classList.remove('added');
    }, 300);
}</pre>
    </div>
</div>
`);