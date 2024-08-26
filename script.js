// Add an event listener to the 'Add Task' button to call the addTask function when clicked
document.getElementById('add-task-btn').addEventListener('click', addTask);

// Load tasks from localStorage when the page loads
window.addEventListener('load', loadTasks);

// Function to add a new task to the task list
function addTask() {
    // Get the input field where the user types a new task
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim(); // Get the text from the input and remove extra spaces

    // Check if the input is not empty
    if (taskText !== '') {
        // Get the task list element
        const taskList = document.getElementById('task-list');

        // Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="checkmark"></span>
            <span class="task-text">${taskText}</span>
            <button class="remove-btn">&times;</button>
        `;

        // Add an event listener to the checkmark to mark the task as completed
        listItem.querySelector('.checkmark').addEventListener('click', () => {
            listItem.classList.toggle('completed'); // Toggle the 'completed' class
            saveTasks(); // Save the updated tasks to localStorage
        });

        // Add an event listener to the remove button to delete the task
        listItem.querySelector('.remove-btn').addEventListener('click', () => {
            listItem.remove(); // Remove the task from the list
            saveTasks(); // Save the updated tasks to localStorage
        });

        // Append the new task to the task list
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field

        // Save the updated task list to localStorage
        saveTasks();
    }
}

// Function to save the current tasks to localStorage
function saveTasks() {
    const tasks = []; // Array to hold the task data
    const taskList = document.getElementById('task-list').children; // Get all task list items

    // Loop through each task item and add its data to the tasks array
    for (let task of taskList) {
        tasks.push({
            text: task.querySelector('.task-text').textContent, // Get the text of the task
            completed: task.classList.contains('completed') // Check if the task is completed
        });
    }

    // Save the tasks array to localStorage as a JSON string
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage and display them
function loadTasks() {
    // Get the tasks from localStorage and parse the JSON string
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        // Loop through each task and add it to the task list
        for (let task of tasks) {
            const taskList = document.getElementById('task-list');

            // Create a new list item for each task
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="checkmark"></span>
                <span class="task-text">${task.text}</span>
                <button class="remove-btn">&times;</button>
            `;

            // Mark the task as completed if necessary
            if (task.completed) {
                listItem.classList.add('completed');
            }

            // Add an event listener to the checkmark to toggle completion
            listItem.querySelector('.checkmark').addEventListener('click', () => {
                listItem.classList.toggle('completed'); // Toggle the 'completed' class
                saveTasks(); // Save the updated tasks to localStorage
            });

            // Add an event listener to the remove button to delete the task
            listItem.querySelector('.remove-btn').addEventListener('click', () => {
                listItem.remove(); // Remove the task from the list
                saveTasks(); // Save the updated tasks to localStorage
            });

            // Append the task to the task list
            taskList.appendChild(listItem);
        }
    }
}

