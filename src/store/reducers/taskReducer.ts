import { ActionType, TodoReducerState } from "../../types/task";

const defaultState: TodoReducerState = {
  tasks: [],
  loading: true,
  error: null,
};

export const todoReducer = (
  state = defaultState,
  action: ActionType
): TodoReducerState => {
  switch (action.type) {
    case "FETCH_TASKS":
      return { tasks: [], loading: true, error: null };

    case "FETCH_TASKS_SUCCESS":
      return { tasks: action.payload, loading: false, error: null };

    case "FETCH_TASKS_ERROR":
      return { tasks: [], loading: false, error: action.payload };

    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: [...state.tasks].filter((task) => task.id !== action.payload),
      };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: [...state.tasks].map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    default:
      return { ...state };
  }
};

export type RootState = ReturnType<typeof todoReducer>;
