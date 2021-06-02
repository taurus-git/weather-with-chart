import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
const destination = 'root';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById(destination)
);