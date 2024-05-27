import { projectsLoad } from "./dom-manip";
import { manageProjectPopup, manageTodoPopup } from "./manage-popups";
import { getDarkModeState, setDarkMode } from "./darkmode";
import { todoDependencies } from ".";

function initializeDom() {
  if (getDarkModeState()) {
    setDarkMode();
    document.querySelector("#darkmode-toggle").checked = true;
  }
  let currentProject = todoDependencies.getCurrentProject();
  if (
    currentProject === "Today" ||
    currentProject === "Tomorrow" ||
    currentProject === "This Week" ||
    currentProject === "Next Week"
  ) {
    const createTodoBtn = document.querySelector("#create-todo-btn");
    createTodoBtn.classList.add("disable");
  }
  projectsLoad();
  manageProjectPopup();
  manageTodoPopup();
}

export { initializeDom };
