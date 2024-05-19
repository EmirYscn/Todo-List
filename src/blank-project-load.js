import { projectsDivSetup, renderProjectTodos } from "./dom-manip";

function ProjectsLoad(projectName = "Default") {
  const projectsDiv = document.querySelector(".projects-container");
  projectsDiv.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "My list";
  projectsDiv.appendChild(heading);
  renderProjectTodos(projectName);
  projectsDivSetup();
}

export { ProjectsLoad };
