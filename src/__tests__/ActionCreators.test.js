import expect from 'expect';
import * as ActionTypes from '../redux/actions/ActionTypes';
import * as ActionCreators from '../redux/actions/ActionCreators';

describe('actions', () => {
  it('should create an action to add a meals', () => {
    const meals = 'Meals';
    const expectedAction = {
      type: ActionTypes.ADD_MEALS,
      payload: meals.meals,
    };
    expect(ActionCreators.addMeals(meals)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to add a meals', () => {
    const filters = 'Chicken';
    const expectedAction = {
      type: ActionTypes.FILTER_CATEGORY,
      payload: filters,
    };
    expect(ActionCreators.filterChange(filters)).toEqual(expectedAction);
  });
});
