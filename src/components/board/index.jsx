import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'

export default function Board ({cards, flipped, handleClick}){
    return ( <div className="board">
       {
           cards.map((card) => (
           <Card
            key={card.id}
            type={card.type}
            id={card.id}
            width={100}
            height={100}
            flipped={flipped.includes(card.id)}
            handleClick={() => handleClick(card.id)}
            />
            ))} 
    </div>
    )
}

Board.propTypes ={
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}
