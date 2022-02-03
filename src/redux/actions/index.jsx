import { ADD_TODO, DELETE_TODO } from "./types";

export const addTodoAction = (todo) => ({
  type: ADD_TODO,
  paylooad: todo,
});

export const deleteTodoAction = (todoID) => ({
  type: DELETE_TODO,
  payload: todoID,
});
