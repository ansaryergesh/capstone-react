import * as ActionTypes from './ActionTypes';


export const Meals = (state = {
    isLoading: true,
    errMess: null,
    meals: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TEST:
            return { ...state, isLoading: false, errMess: null, meals: action.payload };

        case ActionTypes.TEST_LOADING:
            return { ...state, isLoading: true, errMess: null, meals: [] };

        case ActionTypes.TEST_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, meals: [] };

        default:
            return state;
    }
}