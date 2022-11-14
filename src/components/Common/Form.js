import React from 'react';

import './Form.css';
function Form() {

    return (
         <>
            <form className='movies__form'>
                <input
                type='text'
                className='movies__form-input'
                value=''
                placeholder="фильм"
            />
             <button className='movies__form-button'> {'| >'}
            </button>
            </form>
        </>
    );
}

export default Form;