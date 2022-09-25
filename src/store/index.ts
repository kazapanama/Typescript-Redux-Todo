import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducers/taskReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { useDispatch } from "react-redux";

export const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
