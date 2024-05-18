import { todoDependencies } from ".";

class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.todoItems = [];
  }

  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }

  showTodos() {
    this.todoItems.forEach((todo) => {
      console.log(todo);
    });
  }
}

function showProjects() {
  console.log(todoDependencies.projects);
}
function showProjectTodos(projectName) {
  let project = todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  project.showTodos();
}

function createProject(name) {
  todoDependencies.projects.push(new Project(name));
}

export { Project, createProject, showProjects, showProjectTodos };
