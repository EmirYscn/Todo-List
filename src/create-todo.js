import { todoDependencies } from ".";
import { format } from "date-fns";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = format(new Date(dueDate), "dd/MM/yyyy");
    // this.dueDate = dueDate;
    this.priority = priority;
  }
}

function createTodo(
  title,
  description,
  dueDate,
  priority,
  projectToInsert = ""
) {
  const todo = new Todo(title, description, dueDate, priority);
  if (projectToInsert === "") {
    todoDependencies.defaultProject.addTodoItem(todo);
  }
  todoDependencies.projects.forEach((currentProject) => {
    if (currentProject.projectTitle === projectToInsert) {
      currentProject.addTodoItem(todo);
    }
  });
}
function createTodo2({
  title,
  description,
  dueDate,
  priority,
  projectToInsert,
}) {
  const todo = new Todo(title, description, dueDate, priority, projectToInsert);
  if (projectToInsert === "") {
    todoDependencies.defaultProject.addTodoItem(todo);
  }
  todoDependencies.projects.forEach((currentProject) => {
    if (currentProject.projectTitle === projectToInsert) {
      currentProject.addTodoItem(todo);
    }
  });
}

export { Todo, createTodo, createTodo2 };
