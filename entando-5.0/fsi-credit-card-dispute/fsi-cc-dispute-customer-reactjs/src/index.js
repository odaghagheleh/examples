/* eslint no-unused-vars: 0, eqeqeq:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from './config/routes';

import { createStore,compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import transactionDisputeReducer from './reducers/reducers';
import MainForm from './components/MainForm'
import thunkMiddleware from 'redux-thunk'

//comment the below block before depoloy to server
import jquery from 'jquery';
import metismenu from 'metismenu';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'

import './styles/style.css'
//comment the top block before deploy to server
////////////////////////////////////////////////////////

import './steps/css/main.css'
import './css/cssoverride.css'

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
        basename={'/fsi-credit-card-dispute-customer/preview/en/landing'}
        >
            {routes}
        </Router>
    </Provider>
    , document.getElementById('fsi-demo-customer'));
registerServiceWorker();
