

function add() {
    const input = document.querySelector('#newtask input');
    if (input.value.length === 0) {
        alert("Kindly Enter Task Name!!!!");
    } else {
        const taskName = input.value;
        const taskId = `taskname-${Date.now()}`; // Generate a unique ID for each task
        document.querySelector('#tasks').insertAdjacentHTML('beforeend', `
            <div class="task">
                <span id="${taskId}">
                    ${taskName}
                </span>
                <button class="delete">
                <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        `);

        // Event delegation for delete buttons
        document.querySelector('#tasks').addEventListener('click', function(event) {
            if (event.target.classList.contains('delete')) {
                event.target.parentNode.remove();
            }
        });
    }
}

// Attach the add function to the 'push' button
document.querySelector('#push').addEventListener('click', add);
