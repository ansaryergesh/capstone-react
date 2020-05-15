/* eslint-disable no-use-before-define */
/* eslint arrow-parens: [2, "as-needed"] */
import * as ActionTypes from './ActionTypes';
import { url } from '../../shared/url';


export const fetchMeals = () => dispatch => {
  dispatch(mealsLoading(true));
  return fetch(`${url}search.php?f=p`)
    .then(response => {
      if (response.ok) {
        return response;
      }

      const error = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    },
    error => {
      const errmess = new Error(error.message);
      throw errmess;
    })
    .then(response => response.json())
    .then(meals => dispatch(addMeals(meals)))
    .catch(error => dispatch(mealsFailed(error.message)));
};

export const mealsLoading = () => ({
  type: ActionTypes.MEALS_LOADING,
});

export const mealsFailed = errmess => ({
  type: ActionTypes.MEALS_FAILED,
  payload: errmess,
});

export const addMeals = meals => ({
  type: ActionTypes.ADD_MEALS,
  payload: meals.meals,
});

export const filterChange = filters => ({
  type: ActionTypes.FILTER_CATEGORY,
  payload: filters,
});
