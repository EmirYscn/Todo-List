import { blankProjectLoad } from "./blank-project-load";
import { todoDependencies } from ".";
import { getProjectTodos } from "./create-project";

function projectsDivSetup() {
  const projectsDiv = document.querySelector(".projects-container");
  const ul = document.createElement("ul");
  projectsDiv.appendChild(ul);
  todoDependencies.projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.projectTitle;
    ul.appendChild(listItem);
    // listItem.addEventListener("click", loadProjectTodos(project.projectTitle));
    listItem.addEventListener("click", () => {
      loadProjectTodos(project.projectTitle);
    });
  });
}
function loadProjectTodos(projectName) {
  let project = getProjectTodos(projectName);
  let projectTodos = project.getTodos();
  const todosDiv = document.querySelector(".todos");
  todosDiv.innerHTML = "";
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
  });
}

export { projectsDivSetup, loadProjectTodos };
