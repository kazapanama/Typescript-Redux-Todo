import { ActionType, TodoReducerState } from "../../types/todo";

const defaultState: TodoReducerState = {
  todos: [],
  loading: true,
  error: null,
};

export const todoReducer = (
  state = defaultState,
  action: ActionType
): TodoReducerState => {
  switch (action.type) {
    case "FETCH_TODO":
      return { todos: [], loading: true, error: null };

    case "FETCH_TODO_SUCCESS":
      return { todos: action.payload, loading: false, error: null };

    case "FETCH_TODO_ERROR":
      return { todos: [], loading: false, error: action.payload };

    case "ADD_TODO":
      return { ...state, todos:[...state.todos,action.payload] };

    case "REMOVE_TODO":
      return { ...state, todos:[...state.todos].filter(task=>task.id !== action.payload)};

    case "EDIT_TODO":
      return { ...state };

    default:
      return { ...state };
  }
};

export type RootState = ReturnType<typeof todoReducer>;
