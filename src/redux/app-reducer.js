import { signIn } from './auth-reducer';

const initialState = {
    initialized: false,
    isFetchingCompleted: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE_USER':
            return {
                ...state,
                initialized: true,
            };
        case 'COMPLETE_DATA_FETCHING':
            debugger
            return {
                ...state,
                isFetchingCompleted: true,
            };
        default:
            return state;
    }
};
// Action Creators
export const Actions = {
    initializeUser: () => ({ type: 'INITIALIZE_USER' }),
    completeDataFetching: () => ({ type: 'COMPLETE_DATA_FETCHING' }),

};
// Thunks
export const initializeApp = () => async (dispatch) => {
    const response= await dispatch(signIn());
    if (response) {
        dispatch(Actions.initializeUser());
        dispatch(Actions.completeDataFetching())
    } else {
        dispatch(Actions.completeDataFetching())
    }
};

export default appReducer;
