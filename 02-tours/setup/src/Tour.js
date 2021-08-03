import React, { useState } from 'react'

export default function Tour({ name, image, info, price, removeTour, id }) {
  const [openInfo, setOpenInfo] = useState(true);
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
          {!openInfo ? info : `${info.slice(0, 200)}...`}    
          <button onClick={() => setOpenInfo(!openInfo)}>
            {openInfo ? 'read more' : 'show less'}
          </button>
        </p>
        <button onClick={ () => removeTour(id) } className="delete-btn">
            not interesting
        </button>
      </footer> 
    </article>
  )
}
