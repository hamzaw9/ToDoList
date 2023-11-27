import { renderTasks } from './renderEditTask.js';
import updateLocalStorage from './updateLocalStorage.js';
import tasks from './taskObject.js';

const listContainer = document.getElementById('list-container');

const addTaskToList = () => {
  const addTaskValue = document.querySelector('#add-task').value;

  if (!addTaskValue.trim()) {
    return;
  }

  const newTask = {
    description: addTaskValue,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  updateLocalStorage();
  renderTasks();
  document.querySelector('#add-task').value = '';
};

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
