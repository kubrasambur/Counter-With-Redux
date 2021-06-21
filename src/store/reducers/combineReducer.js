import { combineReducers } from "redux"
import counterReducer from "./counters"


const rootReducer = combineReducers({
    counter : counterReducer
})


export default rootReducer;