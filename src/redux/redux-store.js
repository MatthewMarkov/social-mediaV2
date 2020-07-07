import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    form: formReducer,
})

export default createStore(rootReducer,(applyMiddleware(thunk)))