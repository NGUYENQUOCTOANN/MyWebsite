// Function to open the cart
function openCart() {
    document.getElementById('cart').classList.add('show');
}

// Function to close the cart
function closeCart() {
    document.getElementById('cart').classList.remove('show');
}

// Function to add an item to the cart
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

// Function to remove an item from the cart
function removeFromCart(element) {
    const cartItem = element.closest('.cart-item');
    cartItem.remove();
    updateTotalPrice();
}

// Function to update the total price
function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const price = parseInt(item.children[2].textContent.replace(' VND', '').replace(/,/g, ''));
        total += price;
    });

    document.getElementById('total-price').textContent = total.toLocaleString() + ' VND';
}

// Function to handle purchase
function purchase() {
    alert('Cảm ơn bạn đã mua hàng!');
    document.getElementById('cart-items').innerHTML = '';
    updateTotalPrice();
}

// Add event listeners to "add-to-cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productItem = event.target.closest('.product-item');
        const name = productItem.getAttribute('data-name');
        const price = productItem.getAttribute('data-price');
        const image = productItem.getAttribute('data-image');

        addToCart(name, price, image);
        openCart();
    });
});
