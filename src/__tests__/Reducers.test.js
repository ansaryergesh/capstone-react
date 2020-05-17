import { Meals } from '../redux/meals';
import { Categories } from '../redux/categories';
import * as ActionTypes from '../redux/actions/ActionTypes';

describe('meals reducer', () => {
  it('should return the initial state', () => {
    expect(Meals(undefined, {})).toEqual(
      {
        isLoading: true,
        errMess: null,
        meals: [],
      },
    );
  });


  it('should return the add meals action', () => {
    expect(
      Meals([], {
        type: ActionTypes.MEALS_LOADING,
      }),
    ).toEqual({
      isLoading: true,
      errMess: null,
      meals: [],
    });
  });

  it('should return the add meals action', () => {
    expect(
      Meals([], {
        type: ActionTypes.ADD_MEALS,
        payload: 'meals',
      }),
    ).toEqual({
      isLoading: false,
      errMess: null,
      meals: 'meals',
    });
  });

  it('should return the meals failed action', () => {
    expect(
      Meals([], {
        type: ActionTypes.MEALS_FAILED,
        payload: 'Meals Failed to Fetch',
      }),
    ).toEqual({
      isLoading: false,
      errMess: 'Meals Failed to Fetch',
      meals: [],
    });
  });
});

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(Categories(undefined, {})).toEqual(
      'All',
    );
  });

  it('should return the add meals action', () => {
    expect(
      Categories([], {
        type: ActionTypes.FILTER_CATEGORY,
        payload: { filters: 'Chicken' },
      }),
    ).toEqual(
      { filters: 'Chicken' },
    );
  });
});
