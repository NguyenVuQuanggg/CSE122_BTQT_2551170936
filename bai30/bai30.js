document.addEventListener("DOMContentLoaded", function () {
    // Xử lý sự kiện bấm các nút phân trang
    const pageLinks = document.querySelectorAll(".pagination .page-link");

    pageLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Nếu bấm vào nút số trang (không phải mũi tên chuyển hướng)
            if (!this.getAttribute("aria-label")) {
                // Xóa class active của tất cả các trang
                document.querySelectorAll(".pagination .page-item").forEach(item => {
                    item.classList.remove("active");
                });
                
                // Thêm active vào trang được chọn
                this.parentElement.classList.add("active");
            }
        });
    });
});