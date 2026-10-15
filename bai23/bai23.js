// File JavaScript xử lý tương tác bổ sung (chuẩn người mới học)
document.addEventListener('DOMContentLoaded', function () {
    
    // Lấy tất cả các ô ảnh
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Thêm sự kiện click xem thông báo địa danh khi người dùng bấm vào ảnh
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const title = this.querySelector('.gallery-overlay').innerText;
            console.log('Bạn vừa chọn xem danh thắng:', title);
        });
    });

});