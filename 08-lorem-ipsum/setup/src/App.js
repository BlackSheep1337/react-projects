import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraph, setParagraph] = useState('');
  const [sliceValue, setSliceValue] = useState(0);
  
  const handleClick = () => {
    if (paragraph < 1) {
      setSliceValue(1);
    } else { 
      setSliceValue(paragraph);
    }
  }

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          value={ paragraph }
          onChange={ (e) => setParagraph(e.target.value) }
          name="amount"
          id="amount"
          type="number"
        />
        <button
          onClick={ handleClick }
          type="button"
          className="btn"
        >
          generate
        </button>
      </form>
      {data.slice(0, sliceValue).map((paragraph, idx) =>  (
        <article key={ idx }>
          { paragraph }
        </article>
      ))}
    </section>
  )
}

export default App;
