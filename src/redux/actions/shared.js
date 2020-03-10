import {_getQuestions, _getUsers} from "../../api/_DATA";
export const RECEIVE_DATA = 'RECEIVE_DATA';

const receiveData = (users, questions) => {
    return {
        type: RECEIVE_DATA,
        users,
        questions
    }
};


export const asyncActionHandleReceiveData = () =>(dispatch)=>{
    return Promise.all([
        _getQuestions(),
        _getUsers(),
    ]).then(([users, questions])=>{
        dispatch(receiveData(questions, users));
    })
};
