import { createTodo } from "./create-todo";
import {
  Project,
  createProject,
  showProjects,
  getProjectTodos,
} from "./create-project";
import { projectsLoad } from "./blank-project-load";
import "./styles.css";

let todoDependencies = (function () {
  let defaultProject = new Project("Default");
  let projects = [defaultProject];

  return {
    projects,
    defaultProject,
  };
})();

// let projects = [];

// blankProjectLoad();

// initialDomSetup();

// create project
createProject("Grocery");
// create project
createProject("School");

// create todo -> added to default project
const todo1 = createTodo("Juice", "Need juice", "5/20/2024", "low");

// create todo -> added to Grocery project
const todo2 = createTodo("Fruits", "buy fruits", "5/22/2024", "low", "Grocery");

// create todo -> added to default project
const todo3 = createTodo("Food", "need food", "5/23/2024", "high");
// logs all projects
// showProjects();

// logs todos of specifed project

projectsLoad();
export { todoDependencies };
