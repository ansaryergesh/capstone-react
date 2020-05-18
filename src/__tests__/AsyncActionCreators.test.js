import expect from 'expect';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ActionTypes from '../redux/actions/ActionTypes';
import * as ActionCreators from '../redux/actions/ActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_MEALS when fetching meals has been done', () => {
    fetchMock.getOnce('', {
      meals: { meals: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: ActionTypes.MEALS_LOADING },
      { type: ActionTypes.ADD_MEALS, payload: { meals: ['do something'] } },
    ];
    const store = mockStore({ meals: [] });

    return store.dispatch(ActionCreators.fetchMeals()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
