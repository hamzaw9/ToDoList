import { renderTasks } from "./renderEditTask.js";
import { updateIndex } from "./addRemoveTask.js";

import tasks from "./taskObject.js";

const clearCompleteTasks = () => {
  const completedTaskIndices = [];

  tasks.forEach((task, index) => {
    if (task.completed === true) {
      completedTaskIndices.push(index);
    }
  });

  for (let i = completedTaskIndices.length - 1; i >= 0; i--) {
    tasks.splice(completedTaskIndices[i], 1);
  }

  updateIndex();
  localStorage.setItem("Tasks", JSON.stringify(tasks));
  renderTasks();
};

export const handleClearTask = () => {
  const clearTaskBtn = document.querySelector(".clear-task-btn");
  clearTaskBtn.addEventListener("click", () => {
    clearCompleteTasks();
  });
};
