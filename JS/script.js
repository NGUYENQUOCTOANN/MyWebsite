// cart.js

function addToCart(name, price) {
    var cartItem = `
        <div class="cart-item">
            <img src="../RES/${name}.jpg" alt="${name}" class="responsive-img">
            <div>
                <p>${name}</p>
                <p>${price} VND</p>
            </div>
            <button class="remove-from-cart" onclick="removeFromCart(this)">X</button>
        </div>`;
    document.getElementById('cart-items').insertAdjacentHTML('beforeend', cartItem);

    updateTotal();
    document.getElementById('cart').style.display = 'block';
}

function removeFromCart(button) {
    button.parentNode.remove();
    updateTotal();
}

function updateTotal() {
    var totalPrice = 0;
    var cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(function (item) {
        var priceString = item.querySelector('p:nth-child(2)').textContent;
        var price = parseInt(priceString.replace(/\D/g, ''));
        totalPrice += price;
    });
    document.getElementById('total-price').textContent = totalPrice.toLocaleString() + ' VND';
}

function purchase() {
    alert('Đã mua hàng thành công!');
    document.getElementById('cart-items').innerHTML = '';
    updateTotal();
    document.getElementById('cart').style.display = 'none';
}

function closeCart() {
    document.getElementById('cart').style.display = 'none';
}
