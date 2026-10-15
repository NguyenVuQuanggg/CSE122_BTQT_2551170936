// Đảm bảo trang web đã tải xong toàn bộ cấu trúc HTML trước khi chạy JS
document.addEventListener("DOMContentLoaded", function () {
    
    const formDangKy = document.getElementById("formDangKy");
    
    if (formDangKy) {
        formDangKy.addEventListener("submit", function (event) {
            // Ngăn chặn form tự động load lại trang mặc định
            event.preventDefault();
            
            // Lấy giá trị Họ tên và Mã sinh viên người dùng đã nhập
            const hoTen = document.getElementById("hoTen").value.trim();
            const maSv = document.getElementById("maSv").value.trim();
            const camKet = document.getElementById("camKet").checked;
            
            // Kiểm tra điều kiện đơn giản
            if (hoTen === "" || maSv === "") {
                alert("Vui lòng điền đầy đủ Họ tên và Mã sinh viên!");
                return;
            }

            if (!camKet) {
                alert("Bạn cần tích chọn cam kết tự làm bài và quay video OBS trước khi đăng ký!");
                return;
            }

            // Thông báo đăng ký thành công
            alert("Chúc mừng sinh viên " + hoTen + " (MSV: " + maSv + ") đã gửi đăng ký thành công!");
        });
    }

});