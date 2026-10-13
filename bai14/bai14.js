// Dành cho người mới học lập trình web cơ bản: Xử lý tương tác nhẹ nhàng
document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang web 6 kỳ quan thiên nhiên Việt Nam đã sẵn sàng!");

    // Thêm hiệu ứng khi click vào từng khối kỳ quan sẽ hiển thị tên kỳ quan tương ứng
    const cards = document.querySelectorAll('.wonder-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.wonder-title').innerText;
            alert("Bạn đang xem thông tin về: " + title);
        });
    });
});