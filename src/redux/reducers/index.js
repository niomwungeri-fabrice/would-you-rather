import {users} from './users';
import {setAuth} from './setAuth'
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';

export const rootReducer = combineReducers({
    users,
    username: setAuth,
    loadingBar: loadingBarReducer
});



