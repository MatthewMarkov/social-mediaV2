import { signIn } from './auth-reducer';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE_USER':
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};
// Action Creators
export const Actions = {
    initializeUser: () => ({ type: 'INITIALIZE_USER' }),
};
// Thunks
export const initializeApp = () => async (dispatch) => {
    const response= await dispatch(signIn());
    if (response) {
        dispatch(Actions.initializeUser());
    }
};

export default appReducer;
