const removeTaskFromList = (id) => {
  tasks.splice(id, 1);
  updateLocalStorage();
};
