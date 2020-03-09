import {RECEIVE_DATA} from "../actions/shared";
import {CREATE_QUESTION, UPDATE_VOTES} from "../actions/questions";

export const questionsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.questions;
        case UPDATE_VOTES:
            return {
                ...state,
                [action.payload.qid]: {
                    ...state[action.payload.qid],
                    [action.payload.answer]: {
                        ...state[action.payload.answer],
                        votes: state[action.payload.qid][action.payload.answer].votes.concat([action.payload.authedUser])
                    }
                }
            };
        case CREATE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        default:
            return state
    }
};