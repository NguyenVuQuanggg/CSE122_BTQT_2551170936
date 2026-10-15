// Chờ cho trang web tải xong hoàn toàn rồi mới chạy code JS
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Xử lý sự kiện khi bấm nút "Đặt tour ngay"
    const btnBooking = document.getElementById("btnBooking");
    if (btnBooking) {
        btnBooking.addEventListener("click", function () {
            alert("Cảm ơn bạn đã quan tâm! Tính năng đặt tour sẽ sớm được ra mắt.");
        });
    }

    // 2. Xử lý sự kiện khi bấm các nút "Xem thêm" trên các thẻ card
    const detailButtons = document.querySelectorAll(".btn-detail");
    detailButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Lấy tên địa điểm dựa vào tiêu đề nằm cùng trong thẻ card
            const cardTitle = this.closest(".card").querySelector(".card-title").innerText;
            alert("Bạn đang muốn xem chi tiết thông tin về: " + cardTitle);
        });
    });

});