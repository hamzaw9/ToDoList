import './style.css';
import { handleRemoveTask, handleAddTask } from './modules/addRemoveTask.js';
import { handleEditTask, handleWindowLoad } from './modules/renderEditTask.js';
import {
  handletaskStatus,
  handleTaskDefaultStatus,
} from './modules/taskStatus.js';
import handleClearTask from './modules/clearTasks.js';

handleRemoveTask();
handleAddTask();

handleEditTask();
handleWindowLoad();

handletaskStatus();
handleTaskDefaultStatus();

handleClearTask();
