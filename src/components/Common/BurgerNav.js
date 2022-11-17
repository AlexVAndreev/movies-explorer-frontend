import React from 'react';
import {Link} from "react-router-dom";

import './BurgerNav.css';
import AccountButton from "./AccButton";

const BurgerNav = ({active, setActive}) => {
    return (
        <>
            <div className={active ? 'burger-menu__blur' : 'burger-menu__blur burger-menu__blur_disable'}
                 onClick={() => setActive(!active)}
            />
            <div className={active ? 'burger-menu' : ' burger-menu burger-menu_disable'}>
                <div className='burger-menu__content' onClick={evt => evt.stopPropagation()}>
                    <button className='burger-menu__button' onClick={() => setActive(false)}/>

                    <ul className='burger-menu__list'>
                        <li className='burger-menu__list_item'>
                            <Link onClick={() => setActive(false)}
                                  className='burger-menu__link'
                                  to='/'
                            >
                                Главная
                            </Link>
                        </li>
                        <li className='burger-menu__list_item'>
                            <Link onClick={() => setActive(false)}
                                  className='burger-menu__link'
                                  to='/movies'
                            >
                                Фильмы
                            </Link>
                        </li>
                        <li className='burger-menu__list_item'>
                            <Link onClick={() => setActive(false)}
                                  className='burger-menu__link'
                                  to='/saved-movies'
                            >
                                Сохраненные фильмы
                            </Link>
                        </li>
                    </ul>

                    <Link to='/profile' className='burger-menu__account_button'><AccountButton/></Link>
                </div>
            </div>
        </>
    );
};

export default BurgerNav;