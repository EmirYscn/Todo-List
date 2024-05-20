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
}
function setLightMode() {
  body.classList.remove("darkmode");
  main.classList.remove("darkmode");
  todos.forEach((todo) => {
    todo.classList.remove("darkmode");
  });
  darkMode = false;
}

function getDarkModeState() {
  return darkMode;
}

export { setDarkMode, setLightMode, getDarkModeState };
