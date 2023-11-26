import tasks from './taskObject.js';
import updateLocalStorage from './updateLocalStorage.js';

const listContainer = document.getElementById('list-container');

const taskStatusUpdate = (id, checked) => {
  const task = tasks[id];
  if (checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
  updateLocalStorage();
};

export const handletaskStatus = () => {
  listContainer.addEventListener('change', (event) => {
    const { target } = event;
    if (target.classList.contains('check-box')) {
      taskStatusUpdate(target.parentNode.id, target.checked);
    }
  });
};

const taskDefaultStatus = () => {
  tasks.forEach((task) => {
    task.completed = false;
  });
  updateLocalStorage();
};

export const handleTaskDefaultStatus = () => {
  window.addEventListener('load', () => {
    taskDefaultStatus();
  });
};
