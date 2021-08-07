import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);

  const handleClick = (e) => {
    const keyWorld = e.target.innerText.toLowerCase();
    setMenu(items.filter((item) => {
      if (keyWorld === 'all') {
        return item;
      } else {
        return item.category.includes(keyWorld);
      }
    }));
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Categories handleClick={ handleClick } items={ items } />
        </div>
        <div className="section-center">
          {menu.map((item) => <Menu key={ item.id } { ...item } />)}
        </div>
      </section>
    </main>
  )
}

export default App;
