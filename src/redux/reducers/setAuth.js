import {SET_AUTH_USER} from '../actions/users';

export const setAuthReducer = (state = null, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.username;
        default:
            return state
    }
};