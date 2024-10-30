const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const taskItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.onclick = () => taskSpan.classList.toggle("completed");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.onclick = () => taskItem.remove();
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
}