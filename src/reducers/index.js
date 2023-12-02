import { combineReducers } from "redux";
import setUserData from "./user.js";

const rootReducer = combineReducers({
    // Sending All the Reducers from here
    setUserData
})

export default rootReducer;