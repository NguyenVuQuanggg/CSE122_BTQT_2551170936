// Đoạn mã JavaScript bổ sung cho Bài 18 (Xử lý tương tác trang bài viết)
document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang Bài 18 đã tải xong và script.js hoạt động bình thường!");

    // Ví dụ: Thêm hiệu ứng khi nhấp vào tiêu đề bài viết
    const title = document.querySelector('.article-title');
    if (title) {
        title.addEventListener('click', function() {
            alert('Bạn đang xem bài viết: Bông điên điển - Món ngon mùa nước nổi');
        });
    }
});