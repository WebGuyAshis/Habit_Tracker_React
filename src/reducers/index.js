import { combineReducers } from "redux";
import setUserData from "./user.js";
import handleCreateBox from "./createBox.js";
import handlePrevBox from "./prevBox.js";
const rootReducer = combineReducers({
    // Sending All the Reducers from here
    setUserData,
    handleCreateBox,
    handlePrevBox
})

export default rootReducer;