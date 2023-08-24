import "./style.css";
import { handleRemoveTask, handleAddTask } from "./modules/addRemoveTask.js";
import { handleEditTask, handleWindowLoad } from "./modules/renderEditTask.js";

handleRemoveTask();
handleAddTask();

handleEditTask();
handleWindowLoad();
