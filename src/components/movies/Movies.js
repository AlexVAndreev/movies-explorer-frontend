import React from 'react';

import './Movies.css';

function Movies() {

    return (
         <>
            <form className='search-form'>
                <input
                type='text'
                className='movies__input'
                value=''
                placeholder="фильм"
            />
             <button className='movies__search-button'>ddsdd</button>
            </form>

            <label className='filter-checkbox'>
                <input className='filter-checkbox__input-invisible' type='checkbox'/>
                <span className='filter-checkbox__input-visible'/>
                <span className='filter-checkbox__label'>Короткометражки</span>
            </label>
        </>
    );
}

export default Movies;