import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Meals} from './meals';
import {Categories} from './categories';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            meals: Meals,
            categories: Categories,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}