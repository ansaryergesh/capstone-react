/* eslint-disable react/prop-types */
import React from 'react';

const Categories = ({ filterChange }) => {
  const categories = ['All', 'Chicken', 'Pasta', 'Miscellaneous', 'Dessert', 'Pork', 'Vegetarian', 'Beef', 'Side'];

  const handleFilterChange = (e) => {
    filterChange(e.target.value);
  };
  return (
    <select
      className="filterSelect"
      name="category"
      onChange={handleFilterChange}
    >

      { categories.map((category) => (

        <option key={category} value={category}>{category}</option>

      ))}
    </select>
  );
};

export default Categories;
