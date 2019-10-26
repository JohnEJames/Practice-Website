import React, {useState, useEffect} from 'react';
import './App.css';
import Board from './components/board'
import initializeDeck from './Deck'


function Game1() {
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    useEffect(() => {
      setCards(initializeDeck())
    }, [])
    const handleClick = (id) => setFlipped([...flipped, id])
    
  return (
    <div className="App">
        <h1>Game1</h1>
        <Board
          cards={cards}
          flipped={flipped}
          handleClick={handleClick} />
    </div>
  );
}

export default Game1;
