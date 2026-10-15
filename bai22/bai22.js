// Chờ cho trang web tải hoàn tất
document.addEventListener('DOMContentLoaded', function () {

    // Lấy thẻ công tắc (switch) và dòng chữ thông báo trạng thái
    const toggleSwitch = document.getElementById('toggleTheme');
    const statusText = document.getElementById('statusText');

    // Lắng nghe sự kiện người dùng bật/tắt nút gạt
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            // Nếu BẬT: Thêm class .toi vào <body>
            document.body.classList.add('toi');
            statusText.innerText = 'Đây là giao diện ở chế độ TỐI (đang bật).';
        } else {
            // Nếu TẮT: Bỏ class .toi khỏi <body>
            document.body.classList.remove('toi');
            statusText.innerText = 'Đây là giao diện ở chế độ SÁNG.';
        }
    });

});