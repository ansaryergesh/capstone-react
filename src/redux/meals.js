/* eslint-disable import/prefer-default-export */
import * as ActionTypes from './actions/ActionTypes';

export const Meals = (state = {
  isLoading: true,
  errMess: null,
  meals: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MEALS:
      return {
        ...state, isLoading: false, errMess: null, meals: action.payload,
      };

    case ActionTypes.MEALS_LOADING:
      return {
        ...state, isLoading: true, errMess: null, meals: [],
      };

    case ActionTypes.MEALS_FAILED:
      return {
        ...state, isLoading: false, errMess: action.payload, meals: [],
      };

    default:
      return state;
  }
};
