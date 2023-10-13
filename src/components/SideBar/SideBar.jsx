import React from "react";
import "./SideBar.scss";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to={"/Home"}>
        <img className="logoImg" src="/logo.svg" alt="logo" />
      </Link>
      <Link to={"/Home"}>
        <img className="sidebarImgs" src="/setting.svg" alt="setting" />
      </Link>
      <Link to={"/Login"}>
        <img className="sidebarImgs" src="/user.svg" alt="user" />
      </Link>
      <Link to={"/AddCart"}>
        <img className="sidebarImgs" src="/product.svg" alt="product" />
      </Link>
    </div>
  );
};

export default SideBar;
