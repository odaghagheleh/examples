import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from './config/routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import transactionDisputeReducer from './reducers/reducers';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';



let store = createStore(transactionDisputeReducer);

ReactDOM.render(
    <Provider store={store} >
        <Router>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
