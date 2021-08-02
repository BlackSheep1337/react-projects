import React, { useState } from 'react';

const Tour = ({ image, name, price, info, handleDeleteTour, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="single-tour">
      <img src={ image } alt={ name } />
      <footer>
        <div className="tour-info">
          <h4>{ name }</h4>
          <h4 className="tour-price">
            { price }
          </h4>
        </div>
        <p>
          { isOpen ? info : `${info.slice(0, 200)}...` }
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? ' read more' : ' show less'}
          </button>
        </p>
        <button onClick={ () => handleDeleteTour(id) } className="delete-btn">
          delete tour
        </button>
      </footer>
    </article>
  )
};

export default Tour;
