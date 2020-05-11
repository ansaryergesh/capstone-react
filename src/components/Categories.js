/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import PropTypes from 'prop-types';
const Categories = ({ filterChange }) => {
  const categories = ['Chicken', 'Pasta', 'Miscellaneous', 'Dessert', 'Pork', 'Vegetarian','Beef','Side'];

  const handleFilterChange = e => {
    filterChange(e.target.value);
  };
  return (
    <select
      className="filterSelect"
      name="category"
      onChange={handleFilterChange} 
    >
      <option value="All">All</option>
      { categories.map(category => (
     
        <option key={category} value={category}>{category}</option>
      
      ))}
    </select>
  );
};

Categories.propTypes = {
  filterChange: PropTypes.func.isRequired,
};


export default Categories;