export const Categories = (state = 'All', action) => {
  const { type } = action;
  switch (type) {
    case 'FILTER_CHANGE':
      return action.filter;
    default:
      return state;
  }
};

