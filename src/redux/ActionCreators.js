import * as ActionTypes from './ActionTypes';
import { url} from '../shared/url';


export const fetchTests = () => (dispatch) => {
    dispatch(testsLoading(true));

    return fetch(url)
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
        .then(tests => dispatch(addTest(tests)))
        .catch(error => dispatch(testsFailed(error.message)));
}

export const testsLoading = () => ({
    type: ActionTypes.TEST_LOADING
});

export const testsFailed = (errmess) => ({
    type: ActionTypes.TEST_FAILED,
    payload: errmess
});

export const addTest = (tests) => ({
    type: ActionTypes.ADD_TEST,
    payload: tests
});