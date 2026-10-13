// Hàm cập nhật số lượng công việc chưa hoàn thành (chạy ngay lập tức khi thay đổi)
function updateTaskCount() {
    const tasks = document.querySelectorAll('.todo-item');
    let uncompletedCount = 0;
    
    tasks.forEach(task => {
        const checkbox = task.querySelector('.todo-checkbox');
        if (!checkbox.checked) {
            uncompletedCount++;
        }
    });

    document.getElementById('taskCount').innerText = `Còn ${uncompletedCount} việc chưa hoàn thành`;
}

// 1. Thêm công việc mới tức thì không tải lại trang
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const newItem = document.createElement('div');
    newItem.className = 'todo-item';
    newItem.innerHTML = `
        <div class="d-flex align-items-center gap-3">
            <input type="checkbox" class="todo-checkbox" onclick="toggleTask(this)">
            <span class="task-text">${taskText}</span>
        </div>
        <button class="btn-delete" onclick="deleteTask(this)">Xoá</button>
    `;

    taskList.appendChild(newItem);
    input.value = ""; 
    updateTaskCount(); // Cập nhật lại số đếm ngay lập tức
}

// 2. Đổi trạng thái hoạt động tức thì (gạch ngang chữ khi check)
function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
    updateTaskCount(); // Cập nhật số đếm ngay lập tức
}

// 3. Xoá công việc tức thì khỏi danh sách
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
    updateTaskCount(); // Cập nhật số đếm ngay lập tức
}

// Hỗ trợ bấm phím Enter để thêm việc nhanh
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Khởi chạy tính số đếm ban đầu khi load trang
updateTaskCount();