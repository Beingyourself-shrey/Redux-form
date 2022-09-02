import { createStore } from "redux";
import ReducerMain from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
export const Store =  createStore(ReducerMain,composeWithDevTools());

