
// JavaScript for handling cart functionality
const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartElement = document.getElementById('cart');

function addToCart(product) {
    const productData = {
        name: product.dataset.name,
        price: parseInt(product.dataset.price),
        image: product.dataset.image,
        quantity: 1
    };

    const existingProduct = cart.find(item => item.name === productData.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(productData);
    }
    updateCart();
    showCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name} x ${item.quantity}</span>
            <span>${(item.price * item.quantity).toLocaleString('vi-VN')} VND</span>
            <span class="remove-from-cart" onclick="removeFromCart('${item.name}')">X</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `${total.toLocaleString('vi-VN')} VND`;
}

function showCart() {
    cartElement.style.display = 'flex';
}

function closeCart() {
    cartElement.style.display = 'none';
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        updateCart();
    }
}

function purchase() {
    if (cart.length > 0) {
        alert('Cảm ơn bạn đã mua hàng!');
        cart.length = 0; // Clear the cart
        updateCart();
        closeCart();
    } else {
        alert('Giỏ hàng của bạn đang trống.');
    }
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product-item');
        addToCart(product);
    });
});
