import React, {useState} from 'react';
import './App.css';
import Card from './components/card'

function Game1() {
    const [flipped, setFlipped] = useState([])
    const handleClick = (id) => setFlipped([...flipped, id])
    
  return (
    <div className="App">
        <h1>Game1</h1>
        <Card
          id={1}
          width={100}
          height={100}
          back={'/Resources/back.png'}
          front={'/Resources/front.png'}
          flipped={flipped.includes(1)}
          handleClick={() => handleClick(1)}
          />
    </div>
  );
}

export default Game1;
