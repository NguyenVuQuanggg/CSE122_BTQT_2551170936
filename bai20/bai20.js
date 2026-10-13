// Hàm xử lý khi người dùng bấm vào các nút hiệu ứng
function applyEffect(effectName, buttonElement) {
    // 1. Lấy thẻ ảnh hoa hồng
    const img = document.getElementById('roseImage');

    // 2. Xóa bỏ tất cả các class hiệu ứng cũ đang có trên ảnh
    img.className = "img-effect";

    // 3. Thêm class hiệu ứng mới tương ứng với nút vừa bấm
    img.classList.add(effectName);

    // 4. Xóa trạng thái active của tất cả các nút trên thanh công cụ
    const buttons = document.querySelectorAll('.btn-effect');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 5. Thêm class active (đổi sang màu xanh) cho nút được bấm
    buttonElement.classList.add('active');
}