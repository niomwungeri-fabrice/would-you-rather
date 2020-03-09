import {RECEIVE_DATA} from '../actions/shared';

export const loadingReducer = (state = true, action) => {
    if (action.type === RECEIVE_DATA) {
        return false
    }
    return state
};
