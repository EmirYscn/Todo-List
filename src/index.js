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
  createProject("Market");
  // create project
  createProject("School");

  // create todo -> add to default project
  createTodo("Welcome to", "Welcome to to-do app", "5/20/2024", "low");
  createTodo("To-Do", "Welcome to to-do app", "5/20/2024", "medium");
  createTodo("App", "Welcome to to-do app", "5/20/2024", "high");

  // create todo -> add to Grocery project
  createTodo(
    "Buy fresh produce",
    "e.g., apples, spinach, tomatoes)",
    "5/23/2024",
    "low",
    "Market"
  );
  createTodo(
    "Pick up a new type of cheese to try.",
    "",
    "5/23/2024",
    "low",
    "Market"
  );
  createTodo(
    "Restock pantry essentials",
    "e.g., rice, pasta, canned beans",
    "5/23/2024",
    "low",
    "Market"
  );

  // create todo -> add to School project
  createTodo(
    "Complete math homework assignments.",
    "",
    "5/25/2024",
    "high",
    "School"
  );
  createTodo(
    "Prepare for the upcoming history test.",
    "",
    "5/26/2024",
    "medium",
    "School"
  );
  createTodo(
    "Attend the school club meeting after classes.",
    "",
    "5/27/2024",
    "low",
    "School"
  );
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
