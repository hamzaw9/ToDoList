/*import { renderTasks } from "./renderEditTask.js";
import tasks from "./taskObject.js";

const clearCompleteTasks = () => {
  const updatedTasks = [];
  tasks.filter((task) => {
    if (task.completed == false) {
      updatedTasks.push(task);
    }
  });
  localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  renderTasks();
};

export const handleClearTask = () => {
  const clearTaskBtn = document.querySelector(".clear-task-btn");
  clearTaskBtn.addEventListener("click", () => {
    clearCompleteTasks();
  });
};*/
