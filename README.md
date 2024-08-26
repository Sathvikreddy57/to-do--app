# to-do--app

A very basic to-do app using Html,css,js will update new features in future


1. Adding Tasks
User Input: When the user types a new task into the input field and clicks the "Add Task" button, the addTask function is triggered.
Task Creation: The function creates a new list item (<li>) for the task, including a text element, a checkmark for marking the task as complete, and a remove button for deleting the task.
Event Listeners: The newly created checkmark and remove button each get event listeners that handle marking the task as completed or deleting it, respectively.
Update Display: The new task is added to the task list in the DOM, and the input field is cleared.

3. Saving Tasks
Data Storage: Whenever a task is added, marked as completed, or removed, the saveTasks function is called.
Task Data: The function gathers all tasks from the DOM, including their text and completion status, and stores this data in an array.
Local Storage: This array is then converted to a JSON string and saved to the browser’s local storage. This allows tasks to persist even when the page is reloaded.

5. Loading Tasks
Initial Load: When the page is loaded, the loadTasks function is triggered.
Retrieve Data: This function retrieves the JSON string of tasks from local storage, parses it back into an array of task objects.
Rebuild List: For each task object in the array, a corresponding list item is created and added to the task list in the DOM. If a task was marked as completed, it retains that status.

Event Handling
Checkmark Click: Toggles the completed class on the task item, changing its visual appearance and updating the saved tasks in local storage.
Remove Button Click: Removes the task item from the DOM and updates the saved tasks in local storage.

Summary
The app allows users to add, complete, and remove tasks.
It saves the state of tasks to local storage to persist data across page reloads.
The app updates the task list in the DOM based on user interactions and stored data.
