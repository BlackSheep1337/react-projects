import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{ title }</h4>
        <button onClick={ () => setShowQuestion(!showQuestion) } className="btn">
          {showQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{ showQuestion && info }</p>
    </article>
  )
};

export default Question;
