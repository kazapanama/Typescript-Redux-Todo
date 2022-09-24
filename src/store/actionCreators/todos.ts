import { ActionTypes, ActionType, Todo } from "../../types/todo";
import { Dispatch } from "redux";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: ActionTypes.fetch_todo });

      const response = await fetch("./data/mockData.json");
      const json = await response.json();

      dispatch({ type: ActionTypes.fetch_todo_success, payload: json });
    } catch (e) {
      dispatch({ type: ActionTypes.fetch_todo_error, payload: "ERROR" });
    }
  };
};

export const addTask = (task: Todo) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.add_todo, payload: task });
  };
};

export const removeTask = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.remove_todo, payload: id });
  };
};

export const editTask = (task: Todo) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.edit_todo, payload: task });
  };
};

