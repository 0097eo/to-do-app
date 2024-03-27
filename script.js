document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskList.removeChild(newTask);
        }
    });
    newTask.textContent = taskInput.value;
    newTask.appendChild(checkbox);
    taskList.appendChild(newTask);
    taskInput.value = '';
});
