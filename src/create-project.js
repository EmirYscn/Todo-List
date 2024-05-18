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
  getTodos() {
    return this.todoItems;
  }
}

function showProjects() {
  console.log(todoDependencies.projects);
}
function getProjectTodos(projectName) {
  let project = todoDependencies.projects.find(
    (project) => project.projectTitle == projectName
  );
  return project;
}

function createProject(name) {
  todoDependencies.projects.push(new Project(name));
}

export { Project, createProject, showProjects, getProjectTodos };
