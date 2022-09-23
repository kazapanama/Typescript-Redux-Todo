import { ActionTypes, ActionType } from "../../types/todo";
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
