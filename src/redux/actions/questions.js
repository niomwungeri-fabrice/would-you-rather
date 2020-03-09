import {_saveQuestion, _saveQuestionAnswer} from "../../api/_DATA";
import {updateUserQuestion} from "./users";


export const CREATE_QUESTION = 'CREATE_QUESTION';
export const TOGGLE_QUESTION = 'TOGGLE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const UPDATE_VOTES = 'UPDATE_VOTES';
const answerQuestion = ({authedUser, qid, answer}) => {
    return {
        type: ANSWER_QUESTION,
        payload: {
            authedUser,
            qid,
            answer
        }
    }
};

export const updateVotes = (authedUser, qid, answer) => {
    return {
        type: UPDATE_VOTES,
        payload: {
            authedUser, qid, answer
        }
    }
};

export const setIsAnswered = isAnswered => {
    return {
        type: TOGGLE_QUESTION,
        isAnswered
    }
};

const createQuestion = (question) => {
    return {
        type: CREATE_QUESTION,
        question
    }
};

export const handleAnswerQuestion = ({authedUser, qid, answer}) => (dispatch) => {
    return _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
            dispatch(updateVotes(authedUser, qid, answer));
            dispatch(answerQuestion({authedUser, qid, answer}));
        }
    )
};

export const handleCreateQuestion = (question) => (dispatch) => {
    return _saveQuestion(question).then(question => {
        dispatch(createQuestion(question));
        dispatch(updateUserQuestion(question.author, question.id))
    })
};

