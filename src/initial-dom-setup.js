import { blankProjectLoad } from "./blank-project-load";

function initialDomSetup() {
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement("h1");
  heading.textContent = "To-Do Web App";
  contentDiv.appendChild(heading);

  const projectsInfoDiv = document.createElement("div");
  projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
  contentDiv.appendChild(projectsInfoDiv);
}

export { initialDomSetup };
