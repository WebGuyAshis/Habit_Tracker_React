import { combineReducers } from "redux";
import setUserData from "./user.js";
import handleCreateBox from "./createBox.js";

const rootReducer = combineReducers({
    // Sending All the Reducers from here
    setUserData,
    handleCreateBox
})

export default rootReducer;