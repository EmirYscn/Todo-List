import { updateDarkModeLocalStorage } from "./manage-localstorage";

const body = document.querySelector("body");
const main = document.querySelector(".main");
const todos = document.querySelectorAll(".todo");

let darkMode = false;

function setDarkMode() {
  body.classList.add("darkmode");
  main.classList.add("darkmode");
  todos.forEach((todo) => {
    todo.classList.add("darkmode");
  });
  darkMode = true;
  updateDarkModeLocalStorage();
}
function setLightMode() {
  body.classList.remove("darkmode");
  main.classList.remove("darkmode");
  todos.forEach((todo) => {
    todo.classList.remove("darkmode");
  });
  darkMode = false;
  updateDarkModeLocalStorage();
}

function getDarkModeState() {
  return darkMode;
}
function setDarkModeState() {
  darkMode = JSON.parse(localStorage.getItem("darkmode"));
}

export { setDarkMode, setLightMode, getDarkModeState, setDarkModeState };
