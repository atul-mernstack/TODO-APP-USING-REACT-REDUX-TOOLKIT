import { combineReducers } from "redux";
import { todoSlice } from "./todoapp/reducers/todoSlice";


export const rootReducer = combineReducers({
    todos:todoSlice.reducer
    // more reducers can be added here
})