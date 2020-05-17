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
        type: ActionTypes.ADD_MEALS,
        meals: 'meals',
      }),
    ).toEqual({
      isLoading: false,
      errMess: null,
      meals: 'meals',
    });
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
});
