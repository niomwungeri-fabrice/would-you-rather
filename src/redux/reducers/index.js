import {usersReducer} from './users';
import {questionsReducer} from "./questions";
import {setAuthReducer} from './setAuth'
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';
import {navReducer} from "./nav";
import {loadingReducer} from "./loading";
import {toggleQuestionReducer} from './toggleQuestion'

export const rootReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    current: navReducer,
    username: setAuthReducer,
    loading: loadingReducer,
    isAnswered: toggleQuestionReducer,
    loadingBar: loadingBarReducer
});



