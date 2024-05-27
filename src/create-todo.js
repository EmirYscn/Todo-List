import { todoDependencies } from ".";
import {
  format,
  addDays,
  addWeeks,
  endOfWeek,
  startOfWeek,
  isSameWeek,
  isSameDay,
} from "date-fns";
import { getProject } from "./create-project";
import { updateProjectsLocalStorage } from "./manage-localstorage";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    // this.dueDate = format(new Date(dueDate), "dd/MM/yyyy");
    this.dueDate = new Date(dueDate);
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
  const dueDateFormatted = format(todo.dueDate, "dd/MM/yyyy");

  if (projectToInsert === "") {
    todoDependencies.defaultProject.addTodoItem(todo);
  }
  todoDependencies.projects.forEach((currentProject) => {
    if (currentProject.projectTitle === projectToInsert) {
      currentProject.addTodoItem(todo);
    }
  });
  // if todo's duedate is today add to "Today" project as well
  const todaysDate = new Date();
  if (isSameDay(todaysDate, todo.dueDate)) {
    getProject("Today").addTodoItem(todo);
  }
  // if todo's duedate is tomorrow add to "Tomorrow" project as well
  const tomorrowsDate = addDays(todaysDate, 1);
  if (isSameDay(tomorrowsDate, todo.dueDate)) {
    getProject("Tomorrow").addTodoItem(todo);
  }

  // if todo's duedate is in this week add to "This Week" project as well
  // get today's date, get today's date's last week day
  const endOfThisWeek = endOfWeek(new Date(), { weekStartsOn: 1 });
  // check if todo.dueDate is in same week for today's date's last week day
  if (isInSameWeek(todo.dueDate, endOfThisWeek)) {
    // add to "this week" project
    getProject("This Week").addTodoItem(todo);
  }

  // if todo's duedate is in next week add to "Next Week" project as well
  // get today's date, get today's date's next week's last week day
  const endOfNextWeek = endOfWeek(addWeeks(new Date(), 1), { weekStartsOn: 1 });
  // check if todo.dueDate is in same week for today's date's next week's last week day
  if (isInSameWeek(todo.dueDate, endOfNextWeek)) {
    // add to "next week" project
    getProject("Next Week").addTodoItem(todo);
  }
  updateProjectsLocalStorage();
}

function isInSameWeek(todoDueDate, week) {
  return isSameWeek(todoDueDate, week, {
    weekStartsOn: 1,
  });
}

export { Todo, createTodo };
