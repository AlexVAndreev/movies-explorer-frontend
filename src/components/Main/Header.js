import React from 'react';

import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
    return (
        <header className='header'>
        
            <img src={logo} alt='logo' className='header__logo'/>
            <nav className='header__select'>
                <a className='header__signup'>Регистрация</a>
                <button className='header__signin'>Войти</button>
            </nav>


        
    </header>
);
}
export default Header;