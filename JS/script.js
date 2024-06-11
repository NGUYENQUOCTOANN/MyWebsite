// script.js

function openCart() {
    document.getElementById('cart').classList.add('show');
}

function closeCart() {
    document.getElementById('cart').classList.remove('show');
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productItem = event.target.closest('.product-item');
        const name = productItem.getAttribute('data-name');
        const price = productItem.getAttribute('data-price');
        const image = productItem.getAttribute('data-image');

        addToCart(name, price, image);
    });
});

function addToCart(name, price, image) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="${image}" alt="${name}">
        <span>${name}</span>
        <span>${price} VND</span>
        <span class="remove-from-cart" onclick="removeFromCart(this)">X</span>
    `;
    cartItems.appendChild(cartItem);

    updateTotalPrice();
}

function removeFromCart(element) {
    const cartItem = element.closest('.cart-item');
    cartItem.remove();
    updateTotalPrice();
}

function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const price = parseInt(item.children[2].textContent.replace(' VND', '').replace(/,/g, ''));
        total += price;
    });

    document.getElementById('total-price').textContent = total.toLocaleString() + ' VND';
}

function purchase() {
    alert('Cảm ơn bạn đã mua hàng!');
    document.getElementById('cart-items').innerHTML = '';
    updateTotalPrice();
}

// Add event listener for the "Giỏ hàng" button to open the cart
document.querySelector('nav ul li button').addEventListener('click', openCart);
