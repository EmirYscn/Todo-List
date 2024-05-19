import { ProjectsLoad } from "./blank-project-load";
import { todoDependencies } from ".";
import { getProject, createProject } from "./create-project";
import { manageProjectPopup, manageTodoPopup } from "./manage-popups";

manageProjectPopup();
manageTodoPopup();

function projectsDivSetup() {
  renderProjects();
}
function renderProjects() {
  // create unordered list for project names
  const projectsDiv = document.querySelector(".projects-container");
  const ul = document.createElement("ul");
  projectsDiv.appendChild(ul);

  // for each project create list element and add event listener
  todoDependencies.projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.projectTitle;
    ul.appendChild(listItem);
    listItem.addEventListener("click", () => {
      // when clicked show the project's todos
      todoDependencies.setCurrentProject(project.projectTitle);
      renderProjectTodos(project.projectTitle);
      changeProjectHeader(project);
    });
  });
}
function changeProjectHeader(project) {
  const projectHeader = document.querySelector(".header");
  projectHeader.textContent = project.projectTitle;
}
function renderProjectTodos(projectName = "Default") {
  // get the specifed project object
  let project = getProject(projectName);
  changeProjectHeader(project);
  // get the project object's todo array
  let projectTodos = project.getTodos();

  const todosDiv = document.querySelector(".todos");
  todosDiv.innerHTML = "";

  // for each todo in todo array, create div with todo's infos
  projectTodos.forEach((todo) => {
    const div = document.createElement("div");
    div.classList.add("todo");
    todosDiv.appendChild(div);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-btn", "delete-todo-btn");
    const doneButton = document.createElement("button");
    doneButton.classList.add("todo-btn", "done-todo-btn");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = todo.title;
    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = todo.dueDate;
    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = todo.priority;

    div.appendChild(deleteButton);
    div.appendChild(doneButton);
    div.appendChild(titleSpan);
    div.appendChild(dueDateSpan);
    div.appendChild(prioritySpan);

    deleteButton.addEventListener("click", () => {
      project.deleteTodoItem(todo);
      renderProjectTodos(projectName);
    });
  });
}
// function loadProjectTodos(projectName) {
//   let project = getProject(projectName);
//   let projectTodos = project.getTodos();
//   const todosDiv = document.querySelector(".todos");
//   todosDiv.innerHTML = "";
//   projectTodos.forEach((todo) => {
//     const div = document.createElement("div");
//     div.classList.add("todo");
//     todosDiv.appendChild(div);

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("todo-btn", "delete-todo-btn");
//     const doneButton = document.createElement("button");
//     doneButton.classList.add("todo-btn", "done-todo-btn");
//     const titleSpan = document.createElement("span");
//     titleSpan.textContent = todo.title;
//     const dueDateSpan = document.createElement("span");
//     dueDateSpan.textContent = todo.dueDate;
//     const prioritySpan = document.createElement("span");
//     prioritySpan.textContent = todo.priority;

//     div.appendChild(deleteButton);
//     div.appendChild(doneButton);
//     div.appendChild(titleSpan);
//     div.appendChild(dueDateSpan);
//     div.appendChild(prioritySpan);

//     deleteButton.addEventListener("click", () => {
//       project.deleteTodoItem(todo);
//     });
//   });
// }

export { projectsDivSetup, renderProjectTodos };
