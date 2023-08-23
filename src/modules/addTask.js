const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
const addTaskValue = document.querySelector("#add-task").value;

const addTaskToList = () => {
  const newTask = {
    description: addTaskValue,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  updateLocalStorage();
};
