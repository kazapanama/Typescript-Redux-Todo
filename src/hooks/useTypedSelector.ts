import { TypedUseSelectorHook , useSelector} from "react-redux";
import { RootState } from '../store/reducers/todoReducer';


export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector