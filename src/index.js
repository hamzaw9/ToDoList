import "./style.css";

// Array of tasks
const tasks = [
  {
    description: "Task 1",
    completed: false,
    index: 1,
  },
  {
    description: "Task 2",
    completed: true,
    index: 2,
  },
  {
    description: "Task 3",
    completed: false,
    index: 3,
  },
];

function renderTasks() {
  const listContainer = document.getElementById("list-container");

  tasks.forEach((task) => {
    listContainer.innerHTML += ` <div class="list-container-inner">
      <input type="checkbox">
      <span>${task.description}</span>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>`;
  });
}
renderTasks();
