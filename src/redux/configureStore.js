import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Meals} from './meals';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            meals: Meals,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}