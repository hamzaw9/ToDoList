import { renderTasks } from './renderEditTask.js';
import { updateIndex } from './addRemoveTask.js';
import updateLocalStorage from './updateLocalStorage.js';

import tasks from './taskObject.js';

const clearCompleteTasks = () => {
  const completedTaskIndices = [];

  tasks.forEach((task, index) => {
    if (task.completed === true) {
      completedTaskIndices.push(index);
    }
  });

  for (let i = completedTaskIndices.length - 1; i >= 0; i -= 1) {
    tasks.splice(completedTaskIndices[i], 1);
  }

  updateIndex();
  updateLocalStorage();
  renderTasks();
};

const handleClearTask = () => {
  const clearTaskBtn = document.querySelector('.clear-task-btn');
  clearTaskBtn.addEventListener('click', () => {
    clearCompleteTasks();
  });
};

export default handleClearTask;
