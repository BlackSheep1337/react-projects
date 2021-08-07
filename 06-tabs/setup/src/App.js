import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [developer, setDeveloper] = useState([]);
  const [index, setIndex] = useState(0);
  const companies = developer.reduce((acc, cur) => [...acc, cur.company], []);

  const handleFetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setDeveloper(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (e) => {
    const company = e.target.innerText;
    if (company === 'TOMMY') {
      setIndex(0);
    }
    if (company === 'BIGDROP') {
      setIndex(1);
    }
    if (company === 'CUKER') {
      setIndex(2);
    }
  }

  useEffect(() => {
    handleFetchData();
  }, []);
  
  if (!developer.length) {
    return <div />;
  }
  
  const {title, company, duties, dates} = developer[index];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {companies.map((company, idx) => (
            <button onClick={ handleClick } className={ `job-btn ${index === idx ? 'active-btn' : false }`} key={ idx }>
              { company }
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{ title }</h3>
          <h4>{ company }</h4>
          <p className="job-date">{ dates }</p>
          { duties.map((duty, idx) => (
            <div key={ idx } className="job-desc">
              <FaAngleDoubleRight />
              <p>{ duty }</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default App
