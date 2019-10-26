import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import back from './../../images/Back.png'
import Berserker from './../../images/Berserker.png'
import Darkness from './../../images/Darkness.png'
import Light from './../../images/Light.png'
import Medic from './../../images/Medic.png'
import Mummies from './../../images/Mummies.png'
import PeaceKeeper from './../../images/PeaceKeeper.png'
import Ripple from './../../images/Ripple.png'
import Worthy from './../../images/Worthy.png'




export function frontimage(type){
    if (type == 'Berserker') {return Berserker}
   else if  (type == 'Darkness') {return Darkness}
   else if  (type == 'Light') {return Light}
   else if  (type == 'Medic') {return Medic}
   else if  (type == 'Mummies') {return Mummies}
   else if  (type == 'PeaceKeeper') {return PeaceKeeper}
   else if  (type == 'Ripple') {return Ripple}
   else if  (type == 'Worthy') {return Worthy}
   else return back
}

export default function Card({handleClick, id, type, flipped, height, width}){
    return <div className={`flip-container ${flipped ? 'flipped' : ''}`}
                style={{
                    width, height
                }}
                onClick={() => handleClick(id)}
            >
                <div className="flipper">
                <img
                   alt="Card"
                   style={{
                       height, width
                   }}
                className={flipped ? 'front' : 'back'}
                // src={flipped ? `/images/${type}.png` : back}
                   src={flipped ? frontimage(type) : back} 
                />
                >
                </div>
                </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}