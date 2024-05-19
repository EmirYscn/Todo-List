import { todoDependencies } from ".";
import { getProject, createProject } from "./create-project";
import { manageProjectPopup, manageTodoPopup } from "./manage-popups";

function projectsLoad(projectName = "Default") {
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "Projects";
  projectsDiv.appendChild(heading);

  renderProjectTodos(projectName);
  renderProjects();
}

function renderProjects() {
  // create unordered list for project names
  const projectsDiv = document.querySelector(".projects-container");
  const ul = document.createElement("ul");
  projectsDiv.appendChild(ul);

  // for each project create list element and add event listener
  todoDependencies.projects.forEach((project) => {
    const projectName = project.projectTitle;
    const listItem = document.createElement("li");
    listItem.textContent = projectName;
    ul.appendChild(listItem);

    listItem.addEventListener("click", () => {
      // when clicked show the project's todos and change the current project to that project
      todoDependencies.setCurrentProject(projectName);
      changeProjectHeader(projectName);
      renderProjectTodos(projectName);
    });
  });
}

function changeProjectHeader(projectTitle) {
  const projectHeader = document.querySelector(".header");
  projectHeader.textContent = projectTitle;
}

function renderProjectTodos(projectName = "Default") {
  // get the specifed project object
  const project = getProject(projectName);
  // get the project object's todo array
  const projectTodos = project.getTodos();

  changeProjectHeader(project.projectTitle);

  const todosDiv = document.querySelector(".todos");
  todosDiv.innerHTML = "";

  // for each todo in todo array, create div with todo's infos
  projectTodos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const deleteButton = createButton("todo-btn delete-todo-btn");
    const doneButton = createButton("todo-btn done-todo-btn");
    const titleSpan = createSpan(todo.title);
    const dueDateSpan = createSpan(todo.dueDate);
    const prioritySpan = createSpan(todo.priority);

    todoDiv.append(
      deleteButton,
      doneButton,
      titleSpan,
      dueDateSpan,
      prioritySpan
    );
    todosDiv.appendChild(todoDiv);

    deleteButton.addEventListener("click", () => {
      project.deleteTodoItem(todo);
      renderProjectTodos(projectName);
    });
  });
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}

function createSpan(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}

export { renderProjects, renderProjectTodos, projectsLoad };
