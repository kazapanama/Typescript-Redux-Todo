import { ActionTypes, ActionType, Task } from "../../types/task";
import { Dispatch } from "redux";

export const fetchTasks = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: ActionTypes.fetch_tasks });

      const response = await fetch("./data/mockData.json");
      const json = await response.json();

      dispatch({ type: ActionTypes.fetch_tasks_success, payload: json });
    } catch (e) {
      dispatch({ type: ActionTypes.fetch_tasks_error, payload: "ERROR" });
    }
  };
};

export const addTask = (task: Task) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.add_task, payload: task });
  };
};

export const removeTask = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.remove_task, payload: id });
  };
};

export const editTask = (task: Task) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.edit_task, payload: task });
  };
};
