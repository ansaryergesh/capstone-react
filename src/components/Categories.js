/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CategoryFilter = ({ filterChange }) => {
  const categories = ['Chicken', 'Pasta', 'History', 'Miscellaneous', 'Dessert', 'Pork', 'Vegetarian','Beef','Side'];

  const handleFilterChange = e => {
    if (e.target.value === 'All') {
      return(
        <Link to={'/menu'}/>
      )
    }
    else {
      return(
        <Link to={`/menu/${(e.target.value).toLowerCase}`} />
      )
    }

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

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};


export default CategoryFilter;