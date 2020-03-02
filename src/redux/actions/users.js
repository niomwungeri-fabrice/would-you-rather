import {hideLoading, showLoading} from "react-redux-loading";
import {_getUsers} from "../../api/_DATA";

export const RECEIVE_USERS = 'RECEIVE_USERS';


export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
};

export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return _getUsers().then(users => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading())
    })
};


