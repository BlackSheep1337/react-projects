import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => {
      let index = prevIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });

  }

  const handleNext = () => {
    setIndex((prevIndex) => {
      let index = prevIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  }

  const handleSurprise = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex((prevIndex) => {
      if (randomNumber > people.length - 1) {
        randomNumber = 0;
      }
      return randomNumber;
    })
  }

  const { image, name, job, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={ image } alt={ name } />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{ name }</h4>
      <p className="job">{ job }</p>
      <p className="info">{ text }</p>
      <div className="button-container">
        <button onClick={ handlePrev } className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={ handleNext } className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={ handleSurprise } className="random-btn">
          surprise me 
        </button>
    </article>
  )
};

export default Review;
