import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
// import './index.css';
import thunk from 'redux-thunk'
import {provider} from 'react-redux'
import App from './App';


ReactDOM.render(<App />,document.getElementById('root'));

