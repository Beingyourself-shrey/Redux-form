import { Bank } from "./Bank";
import { IncreDecrement } from "./IncreDecrement";
import { combineReducers} from 'redux'
import {reducer as formReducer  } from "redux-form";

const ReducerMain = combineReducers({bank:Bank,counter:IncreDecrement,form:formReducer});

export default ReducerMain