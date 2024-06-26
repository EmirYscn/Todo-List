import { createProject, checkProject } from "./create-project";
import { createTodo } from "./create-todo";
import { renderProjectTodos, projectsLoad } from "./dom-manip";
import { todoDependencies } from ".";
import { format } from "date-fns";
import { updateCurrentProjectLocalStorage } from "./manage-localstorage";

// Create Project Popup

const projectPopupElements = {
  createBtn: document.querySelector(".create-project-btn"),
  closeBtn: document.querySelector(".create-project-popup .close-btn"),
  doneBtn: document.querySelector("#done-btn"),
  popup: document.querySelector(".create-project-popup"),
  projectNameInput: document.querySelector("#project-name"),
};

function togglePopup(popup, action) {
  popup.classList[action]("active");
}

function resetProjectForm() {
  projectPopupElements.projectNameInput.value = "";
}

function manageProjectPopup() {
  projectPopupElements.createBtn.addEventListener("click", () => {
    resetProjectForm();
    togglePopup(projectPopupElements.popup, "add");
  });
  projectPopupElements.closeBtn.addEventListener("click", () =>
    togglePopup(projectPopupElements.popup, "remove")
  );
  projectPopupElements.doneBtn.addEventListener("click", () => {
    const projectName = projectPopupElements.projectNameInput.value;
    if (projectName !== "" && !checkProject(projectName)) {
      createProject(projectName);
      todoDependencies.setCurrentProject(projectName);
      projectsLoad(todoDependencies.getCurrentProject());
      updateCurrentProjectLocalStorage();
    }
    togglePopup(projectPopupElements.popup, "remove");
  });
}

// Create Todo Popup

const todoPopupElements = {
  createBtn: document.querySelector("#create-todo-btn"),
  closeBtn: document.querySelector(".create-todo-popup .close-btn"),
  doneBtn: document.querySelector("#todo-done-btn"),
  popup: document.querySelector(".create-todo-popup"),
  nameInput: document.querySelector("#todo-name"),
  descriptionInput: document.querySelector("#todo-description"),
  dueDateInput: document.querySelector("#due-date"),
  priorityInput: document.querySelector("#priority"),
};

function resetTodoForm() {
  todoPopupElements.nameInput.value = "";
  todoPopupElements.descriptionInput.value = "";
  todoPopupElements.dueDateInput.value = "";
  todoPopupElements.priorityInput.value = "";
}

function manageTodoPopup() {
  todoPopupElements.createBtn.addEventListener("click", () => {
    resetTodoForm();
    togglePopup(todoPopupElements.popup, "add");
  });
  todoPopupElements.closeBtn.addEventListener("click", () =>
    togglePopup(todoPopupElements.popup, "remove")
  );
  todoPopupElements.doneBtn.addEventListener("click", () => {
    const todoDetails = {
      name: todoPopupElements.nameInput.value,
      description: todoPopupElements.descriptionInput.value,
      dueDate: new Date(todoPopupElements.dueDateInput.value),
      priority: todoPopupElements.priorityInput.value,
    };

    createTodo(
      todoDetails.name,
      todoDetails.description,
      format(
        new Date(
          todoDetails.dueDate.getFullYear(),
          todoDetails.dueDate.getMonth(),
          todoDetails.dueDate.getDate()
        ),
        "yyyy/MM/dd"
      ),
      todoDetails.priority,
      todoDependencies.getCurrentProject()
    );

    renderProjectTodos(todoDependencies.getCurrentProject());
    togglePopup(todoPopupElements.popup, "remove");
  });
}

export { manageProjectPopup, manageTodoPopup };
