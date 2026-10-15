document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện khi người dùng chuyển đổi các Tab nội dung
    const triggerTabList = document.querySelectorAll('#myTab button');
    
    triggerTabList.forEach(function (triggerEl) {
        triggerEl.addEventListener('click', function (event) {
            event.preventDefault();
            const tabTrigger = new bootstrap.Tab(triggerEl);
            tabTrigger.show();
        });
    });
});