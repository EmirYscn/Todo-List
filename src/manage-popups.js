import { createProject } from "./create-project";
import { ProjectsLoad } from "./blank-project-load";
import { createTodo } from "./create-todo";
import { renderProjectTodos } from "./dom-manip";
import { todoDependencies } from ".";

// Create Project Popup

const createProjectPopupBtn = document.querySelector(".create-project-btn");
const createProjectPopupCloseBtn = document.querySelector(".popup .close-btn");
const createProjectDoneBtn = document.querySelector("#done-btn");

function closeProjectPopup() {
  const popup = document.querySelector(".popup");
  popup.classList.remove("active");
}
function showProjectPopup() {
  const popup = document.querySelector(".popup");
  popup.classList.add("active");
}

function manageProjectPopup() {
  createProjectPopupBtn.addEventListener("click", showProjectPopup);
  createProjectPopupCloseBtn.addEventListener("click", closeProjectPopup);
  createProjectDoneBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#project-name").value;
    createProject(projectName);
    todoDependencies.setCurrentProject(projectName);
    ProjectsLoad(todoDependencies.getCurrentProject());
    closeProjectPopup();
  });
}

// Create Todo Popup
const createTodoPopupBtn = document.querySelector("#create-todo-btn");
const createTodoPopupCloseBtn = document.querySelector(".popup-2 .close-btn");
const createTodoDoneBtn = document.querySelector("#todo-done-btn");

function closeTodoPopup() {
  const popup = document.querySelector(".popup-2");
  popup.classList.remove("active");
}
function showTodoPopup() {
  document.querySelector("#todo-name").value = "";
  document.querySelector("#todo-description").value = "";
  document.querySelector("#due-date").value = "";
  document.querySelector("#priority").value = "";
  const popup = document.querySelector(".popup-2");
  popup.classList.add("active");
}

function manageTodoPopup() {
  createTodoPopupBtn.addEventListener("click", showTodoPopup);
  createTodoPopupCloseBtn.addEventListener("click", closeTodoPopup);

  createTodoDoneBtn.addEventListener("click", () => {
    const todoName = document.querySelector("#todo-name").value;
    const todoDescription = document.querySelector("#todo-description").value;
    const todoDueDate = document.querySelector("#due-date").value;
    const todoPriority = document.querySelector("#priority").value;

    createTodo(
      todoName,
      todoDescription,
      todoDueDate,
      todoPriority,
      todoDependencies.getCurrentProject()
    );
    renderProjectTodos(todoDependencies.getCurrentProject());
    closeTodoPopup();
  });
}

export { manageProjectPopup, manageTodoPopup };
