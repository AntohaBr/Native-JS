import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/state';
import {Counter} from "./localStorage-from-redux/Counter";

ReactDOM.render(
    <Provider store={store}>
        <App />
        <Counter/>
    </Provider>,
    document.getElementById('root')
);
