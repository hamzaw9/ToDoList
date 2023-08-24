import tasks from './taskObject.js';

const listContainer = document.getElementById('list-container');

export const renderTasks = () => {
  listContainer.innerHTML = '';
  tasks.forEach((task, index) => {
    listContainer.innerHTML += ` <div id="${index}" class="list-container-inner">
      <input type="checkbox">
      <span class="task-description">${task.description}</span>
      <i class="fa-solid fa-trash remove-task-btn"></i>
    </div>`;
  });
};

const editTask = (taskSpan, taskId) => {
  const taskDescription = taskSpan.textContent;
  taskSpan.innerHTML = `<input type="text" class="edit-task-input" value="${taskDescription}" />`;

  const editInput = taskSpan.querySelector('.edit-task-input');
  editInput.focus();

  editInput.addEventListener('blur', () => {
    tasks[taskId].description = editInput.value;
    localStorage.setItem('Tasks', JSON.stringify(tasks));
    renderTasks();
  });
};

/** ********  Events  ************ */

export const handleEditTask = () => {
  listContainer.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('task-description')) {
      const taskId = target.parentNode.id;
      const taskSpan = target;

      editTask(taskSpan, taskId);
    }
  });
};

export const handleWindowLoad = () => {
  window.addEventListener('load', () => {
    renderTasks();
  });
};
