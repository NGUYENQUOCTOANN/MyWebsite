document.getElementById('add-to-cart').addEventListener('click', function() {
    var notification = document.getElementById('notification');
    notification.textContent = 'Đã mua thành công đơn hàng!';
    notification.style.display = 'block';

    // Thay đổi nội dung của nút sau khi nhấn
    this.textContent = 'Mua thành công';
    this.disabled = true; // Vô hiệu hóa nút sau khi nhấn
});

