import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
})

export default createStore(rootReducer,(applyMiddleware(thunk)))