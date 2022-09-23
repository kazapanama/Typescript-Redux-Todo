import {legacy_createStore as createStore,applyMiddleware} from 'redux'
import { todoReducer } from './reducers/todoReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { useDispatch } from 'react-redux';


  

export const store = createStore(todoReducer,composeWithDevTools((applyMiddleware(thunk))))

export type AppDispatch = typeof store.dispatch // you can use this Dispatch type in your thunks
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types