import tasks from './taskObject.js';

const updateLocalStorage = () => {
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

export default updateLocalStorage;
