import {RECEIVE_QUESTIONS, SUCCESS_MESSAGE} from "../actions/questions";

export const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case SUCCESS_MESSAGE:
            return {
                ...state,
                ...action.message
            };

        default:
            return state
    }
};