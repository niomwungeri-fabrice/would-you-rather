import {loggerMiddleware} from './logger';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

export const rootMiddleware = applyMiddleware(thunk, loggerMiddleware);