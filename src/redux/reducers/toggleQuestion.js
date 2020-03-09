import {TOGGLE_QUESTION} from "../actions/questions";

export const toggleQuestionReducer = (state = true, action) => {
    if (action.type === TOGGLE_QUESTION) {
        return action.isAnswered
    }
    return state
};
