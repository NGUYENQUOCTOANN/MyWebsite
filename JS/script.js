    <!-- JavaScript -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const cart = document.getElementById("cart");
            const cartItems = document.getElementById("cart-items");
            const cartTotal = document.getElementById("total-price");
            let cartData = [];

            function updateCart() {
                cartItems.innerHTML = "";
                let total = 0;
                cartData.forEach((item, index) => {
                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");

                    const img = document.createElement("img");
                    img.src = item.image;
                    img.alt = item.name;

                    const name = document.createElement("span");
                    name.textContent = item.name;

                    const price = document.createElement("span");
                    price.textContent = item.price.toLocaleString() + " VND";

                    const removeBtn = document.createElement("span");
                    removeBtn.textContent = "X";
                    removeBtn.classList.add("remove-from-cart");
                    removeBtn.dataset.index = index;
                    removeBtn.onclick = function() {
                        removeFromCart(index);
                    };

                    cartItem.appendChild(img);
                    cartItem.appendChild(name);
                    cartItem.appendChild(price);
                    cartItem.appendChild(removeBtn);
                    cartItems.appendChild(cartItem);

                    total += item.price;
                });

                cartTotal.textContent = total.toLocaleString() + " VND";
                cart.style.display = cartData.length > 0 ? "flex" : "none";
            }

            function addToCart(product) {
                cartData.push(product);
                updateCart();
            }

            function removeFromCart(index) {
                cartData.splice(index, 1);
                updateCart();
            }

            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", function() {
                    const productItem = this.closest(".product-item");
                    const product = {
                        name: productItem.dataset.name,
                        price: parseInt(productItem.dataset.price),
                        image: productItem.dataset.image
                    };
                    addToCart(product);
                });
            });
        });
    </script>
