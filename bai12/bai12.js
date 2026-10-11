// Lấy các phần tử từ HTML thông qua ID
const btnInLich = document.getElementById('btnInLich');
const inputNgay = document.getElementById('inputNgay');
const inputThang = document.getElementById('inputThang');
const inputNam = document.getElementById('inputNam');

const hienThiNam = document.getElementById('hienThiNam');
const hienThiThang = document.getElementById('hienThiThang');
const hienThiNgay = document.getElementById('hienThiNgay');
const hienThiThu = document.getElementById('hienThiThu');
const hienThiLoiChao = document.getElementById('hienThiLoiChao');

// Thêm sự kiện khi người dùng bấm nút "In lịch"
btnInLich.addEventListener('click', function() {
    // Lấy giá trị ngày, tháng, năm người dùng nhập vào
    let ngay = parseInt(inputNgay.value);
    let thang = parseInt(inputThang.value);
    let nam = parseInt(inputNam.value);

    // Kiểm tra tính hợp lệ cơ bản của ngày tháng
    if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
        alert("Vui lòng nhập đầy đủ ngày, tháng, năm!");
        return;
    }

    // Tạo đối tượng Date (Lưu ý: Tháng trong JavaScript tính từ 0 đến 11, nên phải trừ đi 1)
    let ngayChon = new Date(nam, thang - 1, ngay);

    // Kiểm tra xem ngày tháng nhập vào có thực sự tồn tại không
    if (ngayChon.getFullYear() !== nam || ngayChon.getMonth() !== thang - 1 || ngayChon.getDate() !== ngay) {
        alert("Ngày tháng năm bạn nhập không hợp lệ!");
        return;
    }

    // 1. Hiển thị Năm (màu đỏ, nhỏ)
    hienThiNam.textContent = nam;

    // 2. Hiển thị Tháng (màu xanh, định dạng "Tháng X")
    hienThiThang.textContent = "Tháng " + thang;

    // 3. Hiển thị Số ngày (đỏ, rất lớn)
    hienThiNgay.textContent = ngay;

    // 4. Xác định Thứ trong tuần bằng phương thức getDay()
    let thuIndex = ngayChon.getDay(); // 0 là Chủ nhật, 1 là Thứ hai, ... 6 là Thứ bảy
    let chuoiThu = "";

    switch (thuIndex) {
        case 0:
            chuoiThu = "Chủ nhật";
            break;
        case 1:
            chuoiThu = "Thứ hai";
            break;
        case 2:
            chuoiThu = "Thứ ba";
            break;
        case 3:
            chuoiThu = "Thứ tư";
            break;
        case 4:
            chuoiThu = "Thứ năm";
            break;
        case 5:
            chuoiThu = "Thứ sáu";
            break;
        case 6:
            chuoiThu = "Thứ bảy";
            break;
    }
    hienThiThu.textContent = chuoiThu;

    // 5. Xác định Lời chào theo buổi (Sử dụng getHours() để lấy giờ hiện tại của hệ thống)
    let gioHienTai = new Date().getHours();
    let loiChao = "";

    if (gioHienTai >= 4 && gioHienTai < 11) {
        loiChao = "Chào buổi sáng!";
    } else if (gioHienTai >= 11 && gioHienTai < 14) {
        loiChao = "Chào buổi trưa!";
    } else if (gioHienTai >= 14 && gioHienTai < 18) {
        loiChao = "Chào buổi chiều!";
    } else {
        loiChao = "Chào buổi tối!";
    }
    
    hienThiLoiChao.textContent = loiChao;
});