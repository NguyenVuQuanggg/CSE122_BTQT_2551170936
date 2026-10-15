// File JavaScript xử lý tương tác đơn giản
document.addEventListener('DOMContentLoaded', function () {

    // Lắng nghe sự kiện click vào các nút đăng ký
    const buttons = document.querySelectorAll('.btn-custom');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Lấy tên gói tương ứng
            const card = this.closest('.pricing-card');
            const planName = card.querySelector('.plan-title').innerText;
            
            alert('Bạn đã chọn đăng ký: ' + planName);
        });
    });

});