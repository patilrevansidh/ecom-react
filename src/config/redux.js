import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import Routes from './routes';
import { profile } from '../common/reducers/profileReducer';
import { attributes } from '../common/reducers/attributes';
import { categories } from '../common/reducers/catgories';
import { products } from '../common/reducers/products';
import { departments } from '../common/reducers/departments';


const combinedReducers = combineReducers({ profile, attributes, categories, products, departments })

export const store = createStore(combinedReducers, compose(applyMiddleware(thunk)))

export const App = (props) => {
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
}