import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'
import './styles.css'

export default function Board ({disabled, dimension, cards, flipped,solved, handleClick}){
    return ( <div className="board">
       {
           cards.map((card) => (
           <Card className="card"
            key={card.id}
            type={card.type}
            id={card.id}
            width={dimension /4}
            height={dimension / 4}
            flipped={flipped.includes(card.id)}
            solved = {solved.includes(card.id)}
            handleClick={handleClick}
            disabled = {disabled || solved.includes(card.id)}
            />
            ))} 
    </div>
    )
}

Board.propTypes ={
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}
