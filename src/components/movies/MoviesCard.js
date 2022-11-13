import React from 'react';

import imagesCard from '../../images/zim.jpg';
import './MoviesCard.css';


function MoviesCard() {

    return (
        <article className='card' >
            <img className='card__img' src={imagesCard} alt='film name'></img>
            <header className='card__header'>
                <div className='card__text-wrapper'>
                    <h2 className='card__title'>Название фильма</h2>
                    <p className='card__subtitle'>6:66</p>
                </div>
                <button className='card__button card__button-not-save'/>
            </header>

        </article>
    );
}

export default MoviesCard;