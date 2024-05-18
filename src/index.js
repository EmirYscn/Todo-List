import { createTodo } from "./create-todo";
import {
  Project,
  createProject,
  showProjects,
  showProjectTodos,
} from "./create-project";
import { blankProjectLoad } from "./blank-project-load";
import { initialDomSetup } from "./initial-dom-setup";
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

// create todo -> added to default project
const todo1 = createTodo("Juice", "Need juice", "", "low");

// create todo -> added to Grocery project
const todo2 = createTodo("Fruits", "buy fruits", "", "low", "Grocery");

// create todo -> added to default project
const todo3 = createTodo("Food", "need food", "manana", "high");
// logs all projects
showProjects();

// logs todos of specifed project
showProjectTodos("Default");

export { todoDependencies };
