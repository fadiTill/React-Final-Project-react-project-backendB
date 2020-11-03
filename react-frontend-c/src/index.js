import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
// import './index.css';
import thunk from 'redux-thunk'
import {provider} from 'react-redux'
import App from './App';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let reducer = ''

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <provider store={store}> 
     <App />
    </provider>


,document.getElementById('root'));

