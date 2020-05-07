import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Tests} from './tests';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            tests: Tests,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}