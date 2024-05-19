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

  showTodos() {
    console.log(this.todoItems);
  }
  getTodos() {
    return this.todoItems;
  }
}

function showProjects() {
  console.log(todoDependencies.projects);
}
function getProject(projectName) {
  let project = todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  return project;
}

function createProject(name) {
  todoDependencies.projects.push(new Project(name));
}

export { Project, createProject, showProjects, getProject };
