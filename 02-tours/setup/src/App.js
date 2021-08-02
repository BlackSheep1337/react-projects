import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from './Loading';
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleDeleteTour = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (!data.length) {
    return <main>
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => handleFetchData()}>
            refresh
          </button>
        </div>
      </main>
    </main>
  }
    
  return (
    <main>
      <Tours handleDeleteTour={ handleDeleteTour } data={ data } /> 
    </main>
  );
}

export default App
