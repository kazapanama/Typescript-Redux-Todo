export interface Todo {
  id: number;
  name: string;
  createdAt: string;
  category: string;
  isArchive: boolean;
  content: string;
}

export interface TodoReducerState {
  todos: Todo[];
  loading: boolean;
  error: null | string;
}

export enum ActionTypes {
  fetch_todo = "FETCH_TODO",
  fetch_todo_success = "FETCH_TODO_SUCCESS",
  fetch_todo_error = "FETCH_TODO_ERROR",
  add_todo = "ADD_TODO",
  remove_todo = "REMOVE_TODO",
  edit_todo = "EDIT_TODO",
}

interface Action_Fetch {
  type: ActionTypes.fetch_todo;
}

interface Action_Fetch_Succsess {
  type: ActionTypes.fetch_todo_success;
  payload: Todo[];
}

interface Action_Fetch_Error {
  type: ActionTypes.fetch_todo_error;
  payload: string;
}

interface Action_Add_Item {
  type: ActionTypes.add_todo;
  payload: Todo;
}

interface Action_Remove_Item {
  type: ActionTypes.remove_todo;
  payload: number;
}

interface Action_Edit_Item {
  type: ActionTypes.edit_todo;
  payload: any;
}

export type ActionType =
  | Action_Fetch
  | Action_Fetch_Succsess
  | Action_Fetch_Error
  | Action_Add_Item
  | Action_Remove_Item
  | Action_Edit_Item;
