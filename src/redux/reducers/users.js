import {RECEIVE_DATA} from "../actions/shared";
import {ANSWER_QUESTION} from "../actions/questions";
import {UPDATE_USER_QUESTIONS} from "../actions/users";

export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.users;
        case UPDATE_USER_QUESTIONS:
            return {
                ...state,
                [action.payload.username]: {
                    ...state[action.payload.username],
                    questions: state[action.payload.username].questions.concat([action.payload.questionId])
                }
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.payload.authedUser]: {
                    ...state[action.payload.authedUser],
                    answers: {
                        ...state[action.payload.authedUser].answers,
                        [action.payload.qid]: action.payload.answer
                    }
                }
            };
        default:
            return state
    }
};