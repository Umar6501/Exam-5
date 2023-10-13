import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="leftContent">
        <h1>Товары</h1>
        <div className="mj">
          <h2>Главный /</h2>
          <h2>/ Товары</h2>
        </div>
      </div>
      <div className="logOut">
        <img src="/back.svg" alt="" />
        <h4>Выйти</h4>
      </div>
    </header>
  );
};

export default Header;
