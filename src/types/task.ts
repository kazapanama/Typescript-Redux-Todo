export interface Task {
  id: number;
  name: string;
  createdAt: string;
  category: string;
  isArchive: boolean;
  content: string;
}

export interface TodoReducerState {
  tasks: Task[];
  loading: boolean;
  error: null | string;
}

export enum ActionTypes {
  fetch_tasks = "FETCH_TASKS",
  fetch_tasks_success = "FETCH_TASKS_SUCCESS",
  fetch_tasks_error = "FETCH_TASKS_ERROR",
  add_task = "ADD_TASK",
  remove_task = "REMOVE_TASK",
  edit_task = "EDIT_TASK",
}

interface Action_Fetch {
  type: ActionTypes.fetch_tasks;
}

interface Action_Fetch_Success {
  type: ActionTypes.fetch_tasks_success;
  payload: Task[];
}

interface Action_Fetch_Error {
  type: ActionTypes.fetch_tasks_error;
  payload: string;
}

interface Action_Add_Item {
  type: ActionTypes.add_task;
  payload: Task;
}

interface Action_Remove_Item {
  type: ActionTypes.remove_task;
  payload: number;
}

interface Action_Edit_Item {
  type: ActionTypes.edit_task;
  payload: Task;
}

export type ActionType =
  | Action_Fetch
  | Action_Fetch_Success
  | Action_Fetch_Error
  | Action_Add_Item
  | Action_Remove_Item
  | Action_Edit_Item;
