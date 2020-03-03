import {users} from './users';
import {questions} from "./questions";
import {setAuth} from './setAuth'
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';
import {messages} from "./messages";
import {nav} from "./nav";

export const rootReducer = combineReducers({
    users,
    questions,
    messages,
    current: nav,
    username: setAuth,
    loadingBar: loadingBarReducer
});



