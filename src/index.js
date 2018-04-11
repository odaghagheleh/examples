import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import transactionDisputeReducer from './reducers/reducers';

import './index.css';
import App from './App';


let store = createStore(transactionDisputeReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
