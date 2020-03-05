import { RECEIVE_DATA } from '../actions/shared';

export const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return false;
        default:
            return state;
    }
};
