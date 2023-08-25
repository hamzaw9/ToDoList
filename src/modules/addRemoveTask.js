import { renderTasks } from "./renderEditTask.js";
import tasks from "./taskObject.js";

const listContainer = document.getElementById("list-container");

const addTaskToList = () => {
  const addTaskValue = document.querySelector("#add-task").value;
  const newTask = {
    description: addTaskValue,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  localStorage.setItem("Tasks", JSON.stringify(tasks));
  renderTasks();
  document.querySelector("#add-task").value = "";
};

export const updateIndex = () => {
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
};

const removeTaskFromList = (id) => {
  tasks.splice(id, 1);
  updateIndex();
  localStorage.setItem("Tasks", JSON.stringify(tasks));
  renderTasks();
};

/** ********  Events  ************ */

export const handleRemoveTask = () => {
  listContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-task-btn")) {
      const taskId = event.target.parentNode.id;
      removeTaskFromList(taskId);
    }
  });
};

export const handleAddTask = () => {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", () => {
    addTaskToList();
  });
};
