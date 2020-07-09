import {stopSubmit} from 'redux-form';
import {profileAPI} from "../api/profile-api";

const initialState = {
    posts: [
        {id: 1, message: 'how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 15},
        {id: 3, message: 'How are you?', likesCount: 10},
        {id: 4, message: 'Whats`s new?', likesCount: 11},
        {id: 5, message: 'Whats up?', likesCount: 17},
        {id: 6, message: 'Good morning', likesCount: 16},
    ],
    profile: null,
    status: '',
    statusError: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.post, likesCount: 0}],
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
            };
        case 'GET_STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'SET_STATUS_ERROR':
            return {
                ...state,
                statusError: action.error,
            };
        case 'UPDATE_USER_PHOTO':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        default:
            return state;
    }
};
export const Actions = {
    addPost: (post) => (
        {type: 'ADD_POST', post}),
    setUserProfile: (profile) => (
        {type: 'SET_USER_PROFILE', profile}),
    setStatus: (status) => (
        {type: 'GET_STATUS', status}),
    updateUserPhoto: (photos) => (
        {type: 'UPDATE_USER_PHOTO', photos}),
    setStatusError: (error) => (
        {type: 'SET_STATUS_ERROR', error}),
};


// Thunks
export const getProfile = (userID) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userID);
    dispatch(Actions.setUserProfile(response));
};
export const getStatus = (userID) => async (dispatch) => {
    const response = await profileAPI.getStatus(userID);
    dispatch(Actions.setStatus(response));
};
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(Actions.setStatus(status));
        dispatch(Actions.setStatusError(null));
    } else if (response.resultCode === 1) {
        const error = response.messages[0];
        dispatch(Actions.setStatusError(error));
    }
};
export const updateUserInformation = (userData) => async (
    dispatch, getState) => {
    const response = await profileAPI.updateUserProfileInformation(userData);
    const userID = getState().auth.id;
    if (response.resultCode === 0) {
        dispatch(getProfile(userID));
    } else {
        dispatch(stopSubmit('contacts', {_error: response.data.messages[0]}));
    }
};
export const saveUserPhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.resultCode === 0) {
        dispatch(Actions.updateUserPhoto(response.photos));
    }
};

export default profileReducer;
