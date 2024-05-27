import { todoDependencies } from ".";
import { getDarkModeState } from "./darkmode";

function updateProjectsLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(todoDependencies.projects));
}
function updateDarkModeLocalStorage() {
  localStorage.setItem("darkmode", JSON.stringify(getDarkModeState()));
}

function getLocalStorage() {
  let projects_deserialized = JSON.parse(localStorage.getItem("projects"));
  projects_deserialized.forEach((project) => {
    project.getTodos = function () {
      return this.todoItems;
    };
    project.addTodoItem = function (todoItem) {
      this.todoItems.push(todoItem);
    };
    project.deleteTodoItem = function (todoItem) {
      let index = this.todoItems.indexOf(todoItem);
      this.todoItems.splice(index, 1);
    };
  });
  return projects_deserialized;
}

export {
  updateDarkModeLocalStorage,
  updateProjectsLocalStorage,
  getLocalStorage,
};
