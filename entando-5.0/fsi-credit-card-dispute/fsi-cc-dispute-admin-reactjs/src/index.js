import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from './config/routes';

import { createStore,compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import transactionDisputeReducer from './reducers/reducers';

import jquery from 'jquery';
import metismenu from 'metismenu';
import 'bootstrap/dist/css/bootstrap.css';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './styles/style.css'

import './steps/css/main.css'
import './css/cssoverride.css'
import './css/yilicss.css'

import App from './App';

const composeParams = [applyMiddleware(thunkMiddleware)];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeParams.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

let store = createStore(
  transactionDisputeReducer,
   compose(...composeParams),
  );

ReactDOM.render(
    <Provider store={store} >
        <Router
            basename={'/fsi-credit-card-dispute-backoffice/preview/en/landing'}>
            {routes}
        </Router>
    </Provider>
    , document.getElementById('fsi-admin'));
registerServiceWorker();
