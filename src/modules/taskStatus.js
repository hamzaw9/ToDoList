import tasks from "./taskObject.js";

const listContainer = document.getElementById("list-container");

const taskStatusUpdate = (id, checked) => {
  const task = tasks[id];
  if (checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
  localStorage.setItem("Tasks", JSON.stringify(tasks));
};

export const handletaskStatus = () => {
  listContainer.addEventListener("change", (event) => {
    let target = event.target;
    if (target.classList.contains("check-box")) {
      taskStatusUpdate(target.parentNode.id, target.checked);
    }
  });
};

const taskDefaultStatus = () => {
  tasks.forEach((task) => {
    task.completed = false;
  });
  localStorage.setItem("Tasks", JSON.stringify(tasks));
};

export const handleTaskDefaultStatus = () => {
  window.addEventListener("load", () => {
    taskDefaultStatus();
  });
};
