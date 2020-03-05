
import {RECEIVE_DATA} from "../actions/shared";
import {CREATE_QUESTION} from "../actions/questions";

export const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.questions;
        case CREATE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
            default:
            return state
    }
};