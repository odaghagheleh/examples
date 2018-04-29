import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from './config/routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import transactionDisputeReducer from './reducers/reducers';
import MainForm from './components/MainForm'

import jquery from 'jquery';
import metismenu from 'metismenu';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './styles/style.css'
import './steps/css/main.css'
import './css/cssoverride.css'



let store = createStore(transactionDisputeReducer);

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

