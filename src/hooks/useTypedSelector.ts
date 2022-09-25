import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/taskReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
