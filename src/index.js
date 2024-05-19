import { createTodo, createTodo2 } from "./create-todo";
import { Project, createProject } from "./create-project";
import { initializeDom } from "./initial-projects-load";
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

// initialDomSetup();

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

createTodo2({
  title: "Food4",
  description: "need food",
  dueDate: "5/23/2024",
  priority: "high",
  projectToInsert: "",
});
createTodo2({
  title: "Food5",
  description: "need food",
  dueDate: "5/23/2024",
  priority: "high",
  projectToInsert: "Grocery",
});

initializeDom();

export { todoDependencies };
