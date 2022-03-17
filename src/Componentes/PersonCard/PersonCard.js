import React, {Component} from 'react';
import './PersonCard.css'

function PersonCard (props){
    return (
        <div className='tarjeta_persona'>
            <h2>
                {props.persona.lastname}, {props.persona.firstname} 
            </h2>
            <p>
                Age: {props.persona.age}
            </p>
            <p>
                Hair Color: {props.persona.haircolor}
            </p>
            <div>
                <button onClick={()=>props.actualizarEdad(props.persona.firstname)}>
                    Birthday Button for {props.persona.firstname}
                </button>
            </div>
        </div>
    )
}

export default PersonCard;