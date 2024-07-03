import { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import './Card.css'


function Card({name, imgSrc, position, biography }) {

  return (
    <section className='cardContainer'>
        <img className="avatar" src={imgSrc} alt={name} />
        <div className='infoContainer'>
            <h2>{name}</h2>
            <h3>{position}</h3>
            <p>{biography}</p>
        </div>
    </section>
  )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  };

export default Card;
