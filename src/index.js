import { createTodo } from "./create-todo";
import { Project, createProject } from "./create-project";
import { initializeDom } from "./initial-projects-load";
import {
  getCurrentProjectLocalStorage,
  getLocalStorage,
  updateCurrentProjectLocalStorage,
  updateDarkModeLocalStorage,
} from "./manage-localstorage";
import { setDarkModeState } from "./darkmode";
import "./styles.css";

let todoDependencies = (function () {
  let defaultProject = new Project("Default");
  let projects = [defaultProject];
  let currentProject = "Default";

  let setCurrentProject = function (project) {
    currentProject = project;
  };
  let getCurrentProject = function () {
    return currentProject;
  };
  return {
    projects,
    defaultProject,
    setCurrentProject,
    getCurrentProject,
  };
})();

if (localStorage.getItem("projects")) {
  todoDependencies.projects = getLocalStorage();
} else {
  // Seperate this 'Due By' type from normal projects in html css!!!
  createProject("Today");
  createProject("Tomorrow");
  createProject("This Week");
  createProject("Next Week");

  // create project
  createProject("Grocery");
  // create project
  createProject("School");

  // create todo -> added to default project
  createTodo("Juice", "Need juice", "5/20/2024", "low");

  // create todo -> added to Grocery project
  createTodo("Fruits", "buy fruits", "5/22/2024", "low", "Grocery");

  // create todo -> added to default project
  createTodo("Food", "need food", "5/23/2024", "high");
  createTodo("Food2", "need food", "5/23/2024", "high");
  createTodo("Food3", "need food", "5/23/2024", "high");
}

if (localStorage.getItem("darkmode")) {
  setDarkModeState();
} else {
  updateDarkModeLocalStorage();
}

if (localStorage.getItem("currentProject")) {
  todoDependencies.setCurrentProject(getCurrentProjectLocalStorage());
} else {
  updateCurrentProjectLocalStorage();
}

initializeDom();

export { todoDependencies };
