// JavaScript để xử lý chức năng giỏ hàng
const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartElement = document.getElementById('cart');

function addToCart(product) {
    const productData = {
        name: product.dataset.name,
        price: parseInt(product.dataset.price),
        image: product.dataset.image
    };

    cart.push(productData);
    updateCart();
    showCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span>${item.price.toLocaleString('vi-VN')} VND</span>
            <button class="remove-from-cart" onclick="removeFromCart(${index})">X</button>
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

function purchase() {
    alert('Mua hàng thành công!');
    cart.length = 0;
    updateCart();
    closeCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product-item');
        addToCart(product);
    });
});
const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartElement = document.getElementById('cart');

function addToCart(product) {
    const productData = {
        name: product.dataset.name,
        price: parseInt(product.dataset.price),
        image: product.dataset.image
    };

    cart.push(productData);
    updateCart();
    showCart();
}

function removeFromCart(index) {
    const cartItem = cartItemsContainer.children[index];
    const img = cartItem.querySelector('img');
    img.classList.add('removed');
    setTimeout(() => {
        cart.splice(index, 1);
        updateCart();
    }, 500);  // Thời gian khớp với animation `bounceOut`
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="added">
            <span>${item.name}</span>
            <span>${item.price.toLocaleString('vi-VN')} VND</span>
            <button class="remove-from-cart" onclick="removeFromCart(${index})">X</button>
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

function purchase() {
    alert('Mua hàng thành công!');
    cart.length = 0;
    updateCart();
    closeCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product-item');
        addToCart(product);
    });
});
