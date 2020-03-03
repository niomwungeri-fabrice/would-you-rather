import {hideLoading, showLoading} from "react-redux-loading";
import {_getUsers} from "../../api/_DATA";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_AUTH_USER = 'SET_AUTH_USER';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
};

export const setAuthenticatedUser = (username) => {
    return {
        type: SET_AUTH_USER,
        username
    }
};

export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return _getUsers().then(users => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading())
    })
};


