import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/Containers/App'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from '../src/redux/reducers';
import {rootMiddleware} from '../src/redux/middleware/index';

const store = createStore(rootReducer, rootMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
