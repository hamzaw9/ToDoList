function renderTasks() {
  const listContainer = document.getElementById("list-container");

  tasks.forEach((task) => {
    listContainer.innerHTML = "";
    listContainer.innerHTML += ` <div class="list-container-inner">
      <input type="checkbox">
      <span>${task.description}</span>
      <i class="fa-solid fa-trash remove-task-btn"></i>
    </div>`;
  });
}
