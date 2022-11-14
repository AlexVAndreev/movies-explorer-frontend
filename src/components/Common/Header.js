import React from 'react';
import {useHistory} from "react-router-dom";

import './Header.css';
import logo from '../../images/logo.svg';
import NavLogin from "./NavLogin";
import NavLogout from "./NavLogout";

function Header({isLoggedIn}) {
    const history = useHistory();

    const [colorHeader, setColorHeader] = React.useState(false);
    isLoggedIn=false;
    function changeColor() {
        setColorHeader((color) => !color);
    }

    React.useEffect(() => {
        if (history.location.pathname === '/') {
            changeColor();
        }
    }, []);
    return (
        <header className={colorHeader ? 'header  header__color' : 'header'}>
      
            <img src={logo} alt='logo' className='header__logo'/>
            {isLoggedIn ? <NavLogin/> : <NavLogout/>}
    </header>
);
}
export default Header;