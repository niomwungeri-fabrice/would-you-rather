import {usersReducer} from './users';
import {questionsReducer} from "./questions";
import {setAuthReducer} from './setAuth'
import {combineReducers} from 'redux';
import {navReducer} from "./nav";
import {toggleQuestionReducer} from './toggleQuestion'

export const rootReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    current: navReducer,
    username: setAuthReducer,
    isAnswered: toggleQuestionReducer,
});



