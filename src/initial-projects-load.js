import { projectsLoad } from "./dom-manip";
import { manageProjectPopup, manageTodoPopup } from "./manage-popups";

function initializeDom() {
  projectsLoad();
  manageProjectPopup();
  manageTodoPopup();
}

export { initializeDom };
