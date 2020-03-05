import {_saveQuestion, _saveQuestionAnswer} from "../../api/_DATA";


export const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
export const CREATE_QUESTION = 'CREATE_QUESTION';


const answerQuestions = message => {
    return {
        type: SUCCESS_MESSAGE,
        message
    }
};

const createQuestion=(question)=>{
    return {
        type: CREATE_QUESTION,
        question
    }
};

export const handleAnswerQuestion = ({authedUser, qid, answer}) => (dispatch) => {
    return _saveQuestionAnswer({authedUser, qid, answer}).then(()=>{
            dispatch(answerQuestions('Answered Successfully'))}
    ).catch(()=>{
        dispatch(answerQuestions('Server error'))
    })
};

export const handleCreateQuestion = (question) => (dispatch) => {
    return _saveQuestion(question).then(question => {
        dispatch(createQuestion(question));
    })
};

