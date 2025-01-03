//Selectors
const taskInput = document.querySelector("#new-task");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const filterButtons = document.querySelectorAll(".filter-btn");

//Local storage helpers
const saveTasks = (task) => localStorage.setItem("task", JSON.stringify(task));
const loadTasks = () => JSON.parse(localStorage.getItem("task")) || [];

// Load local storage to render tasks if any
let tasks = loadTasks();
renderTasks(tasks);

//Event listeners
addTaskButton.addEventListener("click",addTask);
taskList.addEventListener("click", handleTaskAction);
filterButtons.forEach(btn => btn.addEventListener("click", filterTasks));




// Functions
function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    // Save in local storage the new task
    const newTask = { id: Date.now(), text: taskText, completed: false }
    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks(tasks);

    taskInput.value = ""
}

function renderTasks(taskArray) {
    taskList.innerHTML = "";
    taskArray.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("collection-item");
        li.dataset.id = task.id;

        li.innerHTML = `
        <span class="${task.completed ? 'completed-task' : ''}">${task.text}</span>
        <button class="btn-small green complete-task">✓</button>
        <button class="btn-small red delete-task">✕</button>
      `;
      taskList.appendChild(li);
    });
}

function handleTaskAction(e) {
    const taskId = e.target.closest("li")?.dataset.id;
    if (!taskId) return;

    if (e.target.classList.contains("complete-task")) {
        toggleTaskCompletion(taskId);
    } else if (e.target.classList.contains("delete-task")) {
        deleteTask(taskId);
    }

}

function toggleTaskCompletion(id) {
    tasks = tasks.map(task => 
        task.id === Number(id) ? 
        {...task, completed: !task.completed} : task
    )
    saveTasks(tasks);
    renderTasks(tasks);
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== Number(id));
    saveTasks(tasks);
    renderTasks(tasks);
}

function filterTasks(e) {
    const filter = e.target.dataset.filter;
    let filteredTasks = tasks;

    if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === "pending") {
        filterTasks = tasks.filter(task => !task.completed);
    }
    renderTasks(filteredTasks);
}