'user strict'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {
    applyMiddleware,
    createStore
} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import {getProducts} from './actions/productActions'

const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers,middleware);

import Dashboard from './component/pages/dashboard';

render(
    <Provider store={store}>
        <Dashboard />
    </Provider>, document.getElementById('app')
);