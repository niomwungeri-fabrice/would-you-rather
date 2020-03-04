import {SUCCESS_MESSAGE} from "../actions/questions";

export const messages = (state = "", action) => {
    switch (action.type) {
        case SUCCESS_MESSAGE:
            return {
                ...state,
                ...action.message
            };

        default:
            return state
    }
};