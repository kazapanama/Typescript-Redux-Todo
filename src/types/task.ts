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
  fetchTasks = "FETCH_TASKS",
  fetchTasksSuccess = "FETCH_TASKS_SUCCESS",
  fetchTasksError = "FETCH_TASKS_ERROR",
  addTask = "ADD_TASK",
  removeTask = "REMOVE_TASK",
  editTask = "EDIT_TASK",
}

interface ActionFetch {
  type: ActionTypes.fetchTasks;
}

interface ActionFetchSuccess {
  type: ActionTypes.fetchTasksSuccess;
  payload: Task[];
}

interface ActionFetchError {
  type: ActionTypes.fetchTasksError;
  payload: string;
}

interface ActionAddItem {
  type: ActionTypes.addTask;
  payload: Task;
}

interface ActionRemoveItem {
  type: ActionTypes.removeTask;
  payload: number;
}

interface ActionEditItem {
  type: ActionTypes.editTask;
  payload: Task;
}

export type ActionType =
  | ActionFetch
  | ActionFetchSuccess
  | ActionFetchError
  | ActionAddItem
  | ActionRemoveItem
  | ActionEditItem;
