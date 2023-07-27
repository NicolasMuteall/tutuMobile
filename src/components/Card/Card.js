import React from 'react';
import './_Card.scss';

const Card = (props) => {
    return (
        <div onClick={props.handleClickInfo} className='card text-center mb-3 pointer'>
            <img src={`assets/${props.image}`} alt="" />
            <div className='d-flex desc-voiture'>
                <span className='fw-bold'>{props.nom}</span>
                <span>{props.année}</span>
                <span>{props.couleur}</span>
                <span>{props.moteur}</span>
            </div>
            {props.location === "Disponible" ? (
                <button className='btn btn-primary w-50 mx-auto mt-2' onClick={props.handleClick}>Voir plus</button>)
                : (
                    <button className='btn btn-danger w-50 mx-auto mt-2 relative'>Indisponible</button>)}
        </div>
    );
};

export default Card;