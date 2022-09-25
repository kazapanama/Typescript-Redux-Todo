import { ActionTypes, ActionType, Task } from "../../types/task";
import { Dispatch } from "redux";

export const fetchTasks = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: ActionTypes.fetchTasks });

      const response = await fetch("./data/mockData.json");
      const json = await response.json();

      dispatch({ type: ActionTypes.fetchTasksSuccess, payload: json });
    } catch (e) {
      dispatch({ type: ActionTypes.fetchTasksError, payload: "ERROR" });
    }
  };
};

export const addTask = (task: Task) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.addTask, payload: task });
  };
};

export const removeTask = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.removeTask, payload: id });
  };
};

export const editTask = (task: Task) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.editTask, payload: task });
  };
};
