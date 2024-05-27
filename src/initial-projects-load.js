import { projectsLoad } from "./dom-manip";
import { manageProjectPopup, manageTodoPopup } from "./manage-popups";
import { getDarkModeState, setDarkMode } from "./darkmode";

function initializeDom() {
  if (getDarkModeState()) {
    setDarkMode();
    document.querySelector("#darkmode-toggle").checked = true;
  }
  projectsLoad();
  manageProjectPopup();
  manageTodoPopup();
}

export { initializeDom };
