import { stopSubmit } from 'redux-form';
import {authAPI} from "../api/auth-api";

const initialState = {
    id: null,
    login:  null,
    email:  null,
    isAuth:  null,
    url: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            };
        case 'GET_CAPTCHA_URL':
            return {
                ...state,
                url: action.url,
            };

        default:
            return state;
    }
};

// Action Creators
export const Actions = {
    setAuthUserData: (
        id, login, email, isAuth,
    ) => ({
        type: 'SET_USER_DATA',
        data: {
            id, login, email, isAuth,
        },
    }),
putCaptchaUrl: (url) => ({ type: 'GET_CAPTCHA_URL', url }),

    };
// Thunks
export const signIn = () => async (dispatch) => {
    try {
        const response = await authAPI.authMe();
        if (response.resultCode === 0) {
            const {id, login, email} = response.data;
            dispatch(Actions.setAuthUserData(id, login, email, true));
            return true
        } else {
            alert(response.messages[0])
        }
    } catch (e) {
        alert(e)
    }
};
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await authAPI.getCaptcha();
    dispatch(Actions.putCaptchaUrl(response.url));
};
export const logIn = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(signIn());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        const errorMessage = response.messages.length > 0 ? response.messages[0] : 'Some error';
        // @ts-ignore
        dispatch(stopSubmit('auth', { _error: errorMessage }));
    }
};
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(Actions.setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
