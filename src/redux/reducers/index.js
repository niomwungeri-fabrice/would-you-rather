import {users} from './users';
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';

export const rootReducer = combineReducers({
    users,
    loadingBar: loadingBarReducer
});



