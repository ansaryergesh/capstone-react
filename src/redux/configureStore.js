/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Meals } from './meals';
import { Categories } from './categories';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      meals: Meals,
      filters: Categories,
    }),
    applyMiddleware(thunk, logger),
  );

  return store;
};
