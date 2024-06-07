import { todoDependencies } from ".";
import { getProject, deleteProject } from "./create-project";
import { setDarkMode, setLightMode, getDarkModeState } from "./darkmode";
import { format } from "date-fns";
import {
  updateCurrentProjectLocalStorage,
  updateProjectsLocalStorage,
} from "./manage-localstorage";

function projectsLoad() {
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "Projects";
  projectsDiv.appendChild(heading);

  renderProjects();
  renderProjectTodos(todoDependencies.getCurrentProject());
}

function renderProjects() {
  // create unordered list for project names
  const projectsDiv = document.querySelector(".projects-container");
  const dueByProjectsDiv = document.querySelector(".due-by-container");
  dueByProjectsDiv.innerHTML = "";
  projectsDiv.innerHTML = "";
  const headerProjects = document.createElement("h4");
  const headerDueBy = document.createElement("h4");
  headerProjects.textContent = "Projects";
  headerDueBy.textContent = "Due by";
  projectsDiv.appendChild(headerProjects);
  dueByProjectsDiv.appendChild(headerDueBy);
  const ulProjects = document.createElement("ul");
  const ulDueBy = document.createElement("ul");

  // for each project create list element and add event listener
  todoDependencies.projects.forEach((project) => {
    const projectName = project.projectTitle;
    const listItem = document.createElement("li");
    const deleteButton = createButton();
    listItem.textContent = projectName;
    if (
      projectName === "Today" ||
      projectName === "Tomorrow" ||
      projectName === "This Week" ||
      projectName === "Next Week"
    ) {
      dueByProjectsDiv.appendChild(ulDueBy);
      ulDueBy.appendChild(listItem);
    } else {
      projectsDiv.appendChild(ulProjects);
      listItem.appendChild(deleteButton);
      ulProjects.appendChild(listItem);
    }

    listItem.addEventListener("click", () => {
      // when clicked show the project's todos and change the current project to that project
      todoDependencies.setCurrentProject(projectName);
      updateCurrentProjectLocalStorage();
      changeProjectHeader(projectName);
      renderProjectTodos(projectName);
    });
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(projectName);
      todoDependencies.setCurrentProject(
        todoDependencies.projects[0].projectTitle
      );
      projectsLoad();
      updateCurrentProjectLocalStorage();
    });
  });
}

function changeProjectHeader(projectTitle) {
  const projectHeader = document.querySelector(".header");
  projectHeader.textContent = projectTitle;
}

function renderProjectTodos(projectName = "Default") {
  const project = getProject(projectName);
  const createTodoBtn = document.querySelector("#create-todo-btn");
  if (
    projectName === "Today" ||
    projectName === "Tomorrow" ||
    projectName === "This Week" ||
    projectName === "Next Week"
  ) {
    createTodoBtn.classList.add("disable");
  } else {
    createTodoBtn.classList.remove("disable");
  }
  // get the project object's todo array
  const projectTodos = project.getTodos();

  changeProjectHeader(project.projectTitle);

  const todosDiv = document.querySelector(".todos");
  todosDiv.innerHTML = "";

  // for each todo in todo array, create div with todo's infos
  projectTodos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    if (getDarkModeState()) todoDiv.classList.add("darkmode");

    const deleteButton = createButton("todo-btn delete-todo-btn");
    const doneButton = createButton("todo-btn done-todo-btn");
    const titleSpan = createSpan(todo.title);
    if (todo.done) titleSpan.classList.add("strike");
    const dueDateSpan = createSpan(format(todo.dueDate, "dd/MM/yyyy"));
    let prioritySpan;

    if (todo.priority === "high") {
      prioritySpan = createSpan("❗️❗️❗️");
    } else if (todo.priority === "medium") {
      prioritySpan = createSpan("❗️❗️");
    } else {
      prioritySpan = createSpan("❗️");
    }

    todoDiv.append(
      deleteButton,
      doneButton,
      titleSpan,
      dueDateSpan,
      prioritySpan
    );
    todosDiv.appendChild(todoDiv);

    deleteButton.addEventListener("click", () => {
      // delete todo from current project
      project.deleteTodoItem(todo);
      // delete todo if it is also in other projects
      todoDependencies.projects.forEach((currentProject) => {
        const projectTodos = currentProject.getTodos();
        if (projectTodos.includes(todo)) {
          currentProject.deleteTodoItem(todo);
        }
      });
      updateProjectsLocalStorage();
      renderProjectTodos(projectName);
    });
    doneButton.addEventListener("click", () => {
      todo.done === false ? (todo.done = true) : (todo.done = false);
      updateProjectsLocalStorage();
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
  if (darkmodeToggleButton.checked) {
    setDarkMode();
    renderProjectTodos(todoDependencies.getCurrentProject());
  } else {
    setLightMode();
    renderProjectTodos(todoDependencies.getCurrentProject());
  }
});

const dropDownBtn = document.querySelector(".drop-down-btn");
dropDownBtn.value = "off";
toggleSidebarBtn();

function toggleSidebarBtn() {
  if (dropDownBtn.value === "on") {
    dropDownBtn.textContent = "▶️";
    dropDownBtn.removeEventListener("click", hideSidebar);
    dropDownBtn.addEventListener("click", showSidebar);
    console.log(dropDownBtn.value);
  } else {
    dropDownBtn.textContent = "◀️";
    dropDownBtn.removeEventListener("click", showSidebar);
    dropDownBtn.addEventListener("click", hideSidebar);
    console.log(dropDownBtn.value);
  }
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  sidebar.classList.add("toggleVisibility");
  content.classList.add("toggleVisibility");
  const sidebarChildren = sidebar.children;
  for (const child of sidebarChildren) {
    child.classList.add("toggleVisibility");
  }
  dropDownBtn.value = "on";
  toggleSidebarBtn();
}

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("toggleVisibility");
  const sidebarChildren = sidebar.children;
  for (const child of sidebarChildren) {
    child.classList.remove("toggleVisibility");
  }
  dropDownBtn.value = "off";
  toggleSidebarBtn();
}

export { renderProjects, renderProjectTodos, projectsLoad };
