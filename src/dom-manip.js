import { todoDependencies } from ".";
import { getProject, deleteProject } from "./create-project";

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
  projectsDiv.innerHTML = "";
  const ul = document.createElement("ul");
  projectsDiv.appendChild(ul);

  // for each project create list element and add event listener
  todoDependencies.projects.forEach((project) => {
    const projectName = project.projectTitle;
    const listItem = document.createElement("li");
    const deleteButton = createButton();
    listItem.textContent = projectName;
    listItem.appendChild(deleteButton);
    ul.appendChild(listItem);

    listItem.addEventListener("click", () => {
      // when clicked show the project's todos and change the current project to that project
      todoDependencies.setCurrentProject(projectName);
      changeProjectHeader(projectName);
      renderProjectTodos(projectName);
    });
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(projectName);
      renderProjects();
      renderProjectTodos(todoDependencies.projects[0].projectTitle);
    });
  });
}

function changeProjectHeader(projectTitle) {
  const projectHeader = document.querySelector(".header");
  projectHeader.textContent = projectTitle;
}

function renderProjectTodos(projectName = "Default") {
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
    if (darkmodeToggleButton.checked) todoDiv.classList.add("darkmode");

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
  if (classes) {
    button.className = classes;
  }
  return button;
}

function createSpan(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}

const darkmodeToggleButton = document.querySelector("#darkmode-toggle");
darkmodeToggleButton.addEventListener("click", () => {
  const body = document.querySelector("body");
  const main = document.querySelector(".main");
  const todos = document.querySelectorAll(".todo");
  if (darkmodeToggleButton.checked) {
    body.classList.add("darkmode");
    main.classList.add("darkmode");
    todos.forEach((todo) => {
      todo.classList.add("darkmode");
    });
  } else {
    body.classList.remove("darkmode");
    main.classList.remove("darkmode");
    todos.forEach((todo) => {
      todo.classList.remove("darkmode");
    });
  }
});
export { renderProjects, renderProjectTodos, projectsLoad };
