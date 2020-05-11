import * as ActionTypes from './ActionTypes';

export const Categories = (state = 'All', action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FILTER_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

