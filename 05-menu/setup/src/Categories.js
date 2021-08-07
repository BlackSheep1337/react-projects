import React from 'react';

const Categories = ({ items, handleClick }) => {
  const category = items.reduce((acc, item) => {
    return [...acc ,item.category];
  }, [])
  const buttons = ['all', ...new Set(category)]
  return (
    <>
      {buttons.map((name) => (
        <button onClick={ handleClick } key={ name } className="filter-btn">
          { name }
        </button>
      ))}
    </>
  )
};

export default Categories;
