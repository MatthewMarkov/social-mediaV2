import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({

})

export default createStore(rootReducer,(applyMiddleware(thunk)))