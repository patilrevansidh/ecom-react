import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import Routes from './routes';
import { profile } from '../common/reducers/profileReducer';


const combinedReducers = combineReducers({ profile })

const store = createStore(combinedReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export const App = (props) => {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
}