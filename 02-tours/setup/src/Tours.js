import React from 'react';
import Tour from './Tour';
const Tours = ({ data, handleDeleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {data.map(
          (item) => <Tour handleDeleteTour={ handleDeleteTour } key={ item.id } { ...item } />
        ) }
      </div>
    </section>
  )
};

export default Tours;
