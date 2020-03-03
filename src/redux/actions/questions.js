import {_getQuestions, _saveQuestionAnswer} from "../../api/_DATA";


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';


const answerQuestions = message => {
    return {
        type: SUCCESS_MESSAGE,
        message
    }
};

const receiveQuestions = questions => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
};


export const handleAnswerQuestion = ({authedUser, qid, answer}) => (dispatch) => {
    return _saveQuestionAnswer({authedUser, qid, answer}).then(()=>{
            dispatch(answerQuestions('Answered Successfully'))}
    ).catch(()=>{
        dispatch(answerQuestions(`Server error`))
    })
};

export const handleInitialQuestions = () => (dispatch) => {
    return _getQuestions().then(questions => {
        dispatch(receiveQuestions(questions));
    })
};

