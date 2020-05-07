import * as ActionTypes from './ActionTypes';


export const Categories = (state = {
    isLoading: true,
    errMess: null,
    categories: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MEALS:
            return { ...state, isLoading: false, errMess: null, meals: action.payload };

        case ActionTypes.MEALS_LOADING:
            return { ...state, isLoading: true, errMess: null, categories: [] };

        case ActionTypes.MEALS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, categories: [] };

        default:
            return state;
    }
}