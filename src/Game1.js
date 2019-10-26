import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/board'
import Card from './components/card'
import initializeDeck from './Deck'
import Berserker from './images/Berserker.png'
import Darkness from './images/Darkness.png'
import Light from './images/Light.png'
import Medic from './images/Medic.png'
import Mummies from './images/Mummies.png'
import PeaceKeeper from './images/PeaceKeeper.png'
import Ripple from './images/Ripple.png'
import Worthy from './images/Worthy.png'


function Game1() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preloadImages()
  }, cards)

  useEffect(() => {
    const reiszeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', reiszeListener)
  })
  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length == 0) {
      setFlipped([id])
      setDisabled(false)
      return
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])

        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
    setFlipped([...flipped, id])
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const preloadImages = () => {
    cards.map(card => {
      const src = frontimage(card.type)
      new Image().src = src
    })

  }

  function frontimage(type) {
    if (type === 'Berserker') { return Berserker }
    else if (type === 'Darkness') { return Darkness }
    else if (type === 'Light') { return Light }
    else if (type === 'Medic') { return Medic }
    else if (type === 'Mummies') { return Mummies }
    else if (type === 'PeaceKeeper') { return PeaceKeeper }
    else if (type === 'Ripple') { return Ripple }
    else if (type === 'Worthy') { return Worthy }
    else return null
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id == id)
    const flippedCard = cards.find(card => flipped[0] == card.id)
    return flippedCard.type == clickedCard.type
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ))
  }
  return (
    <div className="App">
      <h1>Game1</h1>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved} />
    </div>
  );
}

export default Game1;
