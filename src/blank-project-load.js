import { projectsDivSetup } from "./dom-manip";

function projectsLoad() {
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "My list";
  projectsDiv.appendChild(heading);
  projectsDivSetup();
}

export { projectsLoad };
