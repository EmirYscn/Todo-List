import { todoDependencies } from ".";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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
  let todo = new Todo(title, description, dueDate, priority);
  if (projectToInsert === "") {
    todoDependencies.defaultProject.addTodoItem(todo);
  }
  todoDependencies.projects.forEach((currentProject) => {
    if (currentProject.projectTitle === projectToInsert) {
      currentProject.addTodoItem(todo);
    }
  });
}

export { Todo, createTodo };
