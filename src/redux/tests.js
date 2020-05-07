import * as ActionTypes from './ActionTypes';


export const Tests = (state = {
    isLoading: true,
    errMess: null,
    tests: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TEST:
            return { ...state, isLoading: false, errMess: null, tests: action.payload };

        case ActionTypes.TEST_LOADING:
            return { ...state, isLoading: true, errMess: null, tests: [] };

        case ActionTypes.TEST_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, tests: [] };

        default:
            return state;
    }
}