import React from 'react';
import {useHistory} from "react-router-dom";

import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
    const history = useHistory();

    const [colorHeader, setColorHeader] = React.useState(false);

    const changeColor = () => {
        setColorHeader((color) => !color);
    }

    React.useEffect(() => {
        if (history.location.pathname === '/') {
            changeColor();
        }
    }, []);
    return (
        <header className={colorHeader ? 'header header__color' : 'header'}>
        
            <img src={logo} alt='logo' className='header__logo'/>
            <nav className='header__select'>
                <a className='header__signup'>Регистрация</a>
                <button className='header__signin'>Войти</button>
            </nav>


        
    </header>
);
}
export default Header;