let cartCount = 0;

function updateCartCounter() {
    const counter = document.getElementById('cartCounter');
    if (counter) counter.textContent = cartCount;
}

function addToCart(button) {
    cartCount++;
    updateCartCounter();
    button.classList.add('added');
    setTimeout(() => button.classList.remove('added'), 300);
}

function handleAddToCartClick(event) {
    addToCart(event.target);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', handleAddToCartClick);
    });
});