document.addEventListener('DOMContentLoaded', function () {

    // 1. Xử lý sự kiện click menu bên trái
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    const contentTitle = document.querySelector('.content-title');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            if (contentTitle) {
                contentTitle.innerText = 'Bài tập ' + this.innerText;
            }
        });
    });

    // 2. Xử lý tương tác menu con màu vàng
    const subMenuItems = document.querySelectorAll('.sub-menu-item');
    const contentBox = document.querySelector('.content-box');

    subMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            const action = this.getAttribute('data-action');

            if (action === 'dao-chuoi') {
                contentBox.innerHTML = `
                    <p class="text-start mb-3 text-danger fw-bold">✓ Thực thi tính năng Đảo chuỗi:</p>
                    <p class="fw-bold mb-1">Chuỗi gốc: "Trung Tâm Tin học – ĐH KHTN"</p>
                    <p class="text-primary mb-0">Chuỗi đảo ngược: "NTHK HĐ – cọh niT mâT gnurT"</p>
                `;
            } else if (action === 'phan-tich') {
                contentBox.innerHTML = `
                    <p class="text-start mb-3 text-danger fw-bold">✓ Thực thi tính năng Phân tích chuỗi:</p>
                    <p class="mb-1">Độ dài chuỗi: <strong>31 ký tự</strong></p>
                    <p class="mb-0">Số từ trong câu: <strong>7 từ</strong></p>
                `;
            } else if (action === 'tim-thay-the') {
                contentBox.innerHTML = `
                    <p class="text-start mb-3 text-danger fw-bold">✓ Thực thi tính năng Tìm & Thay thế:</p>
                    <p class="mb-1">Thay thế "HTML" thành "JavaScript":</p>
                    <p class="fw-bold text-success mb-0">"Chào mừng các bạn đến với ngôn ngữ JavaScript"</p>
                `;
            }
        });
    });

});