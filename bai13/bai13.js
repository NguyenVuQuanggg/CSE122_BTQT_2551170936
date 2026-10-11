// Lấy các thẻ hình ảnh đại diện cho các chữ số giờ, phút, giây từ HTML
const imgH1 = document.getElementById('h1');
const imgH2 = document.getElementById('h2');
const imgM1 = document.getElementById('m1');
const imgM2 = document.getElementById('m2');
const imgS1 = document.getElementById('s1');
const imgS2 = document.getElementById('s2');
const hienThiLoiChao = document.getElementById('hienThiLoiChao');

// Hàm cập nhật đồng hồ và lời chào
function capNhatDongHo() {
    // Lấy thời gian hiện tại từ hệ thống máy tính
    let bayGiơ = new Date();
    let gio = bayGiơ.getHours();
    let phut = bayGiơ.getMinutes();
    let giay = bayGiơ.getSeconds();

    // 1. Xử lý đổi số thành 2 ảnh (hàng chục và hàng đơn vị) cho Giờ, Phút, Giây
    // Ví dụ giờ là 8 -> hàng chục là '0', hàng đơn vị là '8' -> đổi thành file ảnh '0.gif' và '8.gif'
    let chuoiGio = gio < 10 ? "0" + gio : "" + gio;
    let chuoiPhut = phut < 10 ? "0" + phut : "" + phut;
    let chuoiGiay = giay < 10 ? "0" + giay : "" + giay;

    // Gán đường dẫn ảnh tương ứng cho từng chữ số (Thư mục chứa ảnh: Anh/Bai13/)
    imgH1.src = `Anh/Bai13/${chuoiGio.charAt(0)}.gif`;
    imgH2.src = `Anh/Bai13/${chuoiGio.charAt(1)}.gif`;

    imgM1.src = `Anh/Bai13/${chuoiPhut.charAt(0)}.gif`;
    imgM2.src = `Anh/Bai13/${chuoiPhut.charAt(1)}.gif`;

    imgS1.src = `Anh/Bai13/${chuoiGiay.charAt(0)}.gif`;
    imgS2.src = `Anh/Bai13/${chuoiGiay.charAt(1)}.gif`;

    // 2. Xác định Lời chào theo buổi dựa theo giờ hệ thống
    let loiChao = "";
    if (gio >= 4 && gio < 11) {
        loiChao = "Chào buổi sáng";
    } else if (gio >= 11 && gio < 14) {
        loiChao = "Chào buổi trưa";
    } else if (gio >= 14 && gio < 18) {
        loiChao = "Chào buổi chiều";
    } else {
        loiChao = "Chào buổi tối";
    }

    hienThiLoiChao.textContent = loiChao;
}

// Chạy ngay lập tức 1 lần khi vừa mở trang web để không phải chờ 1 giây đầu tiên
capNhatDongHo();

// Sử dụng setInterval để gọi hàm capNhatDongHo liên tục sau mỗi 1000 mili-giây (1 giây) giúp đồng hồ tự chạy
setInterval(capNhatDongHo, 1000);