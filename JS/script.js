let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}đ`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });
    document.getElementById('total-price').textContent = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function checkout() {
    alert(`Tổng tiền là: ${totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}. Cảm ơn bạn đã mua sắm!`);
    cart = [];
    updateCart();
}
