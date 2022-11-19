import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const NavLogout = () => {
  return (
    <nav className="header__wrapper">
      <Link onClick="" className="header__signup" to="/sign-up">
        Регистрация
      </Link>
      <Link onClick="" className="header__signin" to="/sign-in">
        Войти
      </Link>
    </nav>
  );
};

export default NavLogout;
