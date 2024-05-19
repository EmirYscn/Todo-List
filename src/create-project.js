import { todoDependencies } from ".";

class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.todoItems = [];
  }

  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }
  deleteTodoItem(todoItem) {
    let index = this.todoItems.indexOf(todoItem);
    this.todoItems.splice(index, 1);
  }
  getTodos() {
    return this.todoItems;
  }
}

function getProject(projectName) {
  let project = todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  return project;
}

function checkProject(projectName) {
  return todoDependencies.projects.some(
    (project) => project.projectTitle === projectName
  );
}

function createProject(name) {
  todoDependencies.projects.push(new Project(name));
}
function deleteProject(projectName) {
  let project = todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  let projectIndex = todoDependencies.projects.findIndex(
    (x) => x.projectTitle === project.projectTitle
  );
  todoDependencies.projects.splice(projectIndex, 1);
}

export { Project, createProject, getProject, checkProject, deleteProject };
