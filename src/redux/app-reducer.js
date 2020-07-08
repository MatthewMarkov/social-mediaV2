import { signIn } from './auth-reducer';

const initialState = {
    isFetchingCompleted: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMPLETE_DATA_FETCHING':
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
    completeDataFetching: () => ({ type: 'COMPLETE_DATA_FETCHING' }),

};
// Thunks
export const initializeApp = () => async (dispatch) => {
    await dispatch(signIn());
    dispatch(Actions.completeDataFetching())
};

export default appReducer;
