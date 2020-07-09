import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./profile-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    form: formReducer,
})

export default createStore(rootReducer,(applyMiddleware(thunk)))