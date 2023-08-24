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

const handleCheckBox = () => {
  listContainer.addEventListener("change", (event) => {
    if (event.target.classList.contains("check-box")) {
      taskStatusUpdate(event.target.parentNode.id, event.target.checked);
    }
  });
};

export default handleCheckBox;
