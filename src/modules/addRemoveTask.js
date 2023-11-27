import { renderTasks } from './renderEditTask.js';
import updateLocalStorage from './updateLocalStorage.js';
import tasks from './taskObject.js';

const listContainer = document.getElementById('list-container');
const addTaskValue = document.querySelector('#add-task');
const errorMsg = document.querySelector('.error-msg');

const showErrorMessage = () => {
  errorMsg.style.display = 'block';
};

const hideErrorMessage = () => {
  errorMsg.style.display = 'none';
};

const addTaskToList = () => {
  if (!addTaskValue.value.trim()) {
    showErrorMessage();
    return;
  }

  const newTask = {
    description: addTaskValue.value,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  updateLocalStorage();
  renderTasks();
  addTaskValue.value = '';
};

addTaskValue.addEventListener('focus', hideErrorMessage);

addTaskValue.addEventListener('input', hideErrorMessage);

export const updateIndex = () => {
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
};

const removeTaskFromList = (id) => {
  tasks.splice(id, 1);
  updateIndex();
  updateLocalStorage();
  renderTasks();
};

/** ********  Events  ************ */

export const handleRemoveTask = () => {
  listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-task-btn')) {
      const taskId = event.target.parentNode.id;
      removeTaskFromList(taskId);
    }
  });
};

export const handleAddTask = () => {
  const addTaskBtn = document.querySelector('.add-task-btn');
  const taskInput = document.querySelector('#add-task');

  addTaskBtn.addEventListener('click', () => {
    addTaskToList();
  });

  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTaskToList();
    }
  });
};
