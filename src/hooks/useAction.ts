import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActionCreators from "../store/actionCreators/todos";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TodoActionCreators, dispatch);
};
