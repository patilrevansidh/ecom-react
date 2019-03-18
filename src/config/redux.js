import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import Routes from './routes';

const tempReducer = {
    isWorking: 'Yes'
}

const reducer = (state = tempReducer, action) => {
    switch (action.type) {
        case 'DEMO':
            return { ...state, isWorking: 'yes demo Working' }
        default:
            return { ...state }
    }
}

const combinedReducers = combineReducers({ tempReducer: reducer })

const store = createStore(combinedReducers, applyMiddleware(thunk))

export const App = (props) => {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
}