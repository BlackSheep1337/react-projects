import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import Loading from './Loading';

export default function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://course-api.com/react-tours-project'

  const fetchTours = async ()  => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (!tours.length) {
    return (
      <main>
        <section>
          <div className="title">
            <h2>No tours left</h2>
            <button onClick={ () => fetchTours() } className="btn">
            refresh
          </button>
          </div>  
        </section>
      </main>
    )
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div> 
        </div>
        <div>
          {tours.map((tour) => <Tour removeTour={ removeTour } key={ tour.id } { ...tour} />)}
        </div>
      </section>
    </main>
  )
}
