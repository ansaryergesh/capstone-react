import * as ActionTypes from './ActionTypes';
import {url} from '../shared/url';


export const fetchMeals = () => (dispatch) => {
    dispatch(mealsLoading(true));
    return fetch(url + 'search.php?f=p')
        .then(response =>{
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error =>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(meals => dispatch(addMeals(meals)))
        .catch(error => dispatch(mealsFailed(error.message)));
}

export const mealsLoading = () => ({
    type: ActionTypes.MEALS_LOADING
});

export const mealsFailed = (errmess) => ({
    type: ActionTypes.MEALS_FAILED,
    payload: errmess
});

export const addMeals = (meals) => ({
    type: ActionTypes.ADD_MEALS,
    payload: meals
});


export const fetchCategories = () => (dispatch) => {
    dispatch(categoriesLoading(true));
    return fetch(url + 'list.php?c=list')
        .then(response =>{
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error =>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(categories => dispatch(addCategories(categories)))
        .catch(error => dispatch(categoriesFailed(error.message)));
}

export const categoriesLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING
});

export const categoriesFailed = (errmess) => ({
    type: ActionTypes.CATEGORIES_FAILED,
    payload: errmess
});

export const addCategories = (categories) => ({
    type: ActionTypes.ADD_CATEGORIES,
    payload: categories
});

export const filterChange = (filter) => ({
    type: ActionTypes.FILTER_CATEGORY,
    payload: filter
})