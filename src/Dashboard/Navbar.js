import React from "react";
import {NavLink} from 'react-router-dom'
const Navbar = ({ toggle, setToggle }) => {
  return (
    <header className={toggle ? "header body-pd" : "header"} id="header">
      <div className={"header__toggle"}>
        <i
          className="bx bx-menu"
          id="header-toggle"
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
        ></i>
      </div>

      <div className="header__right">
        <NavLink to="/product/create" className="header__right-icon" activeClassName="header__right-icon active">
        <i
          className="bx bx-upload"
         
        ></i>
        </NavLink>
        <i
          className="bx bx-bell header__right-icon notification"
        >
          <div className="notification__number"><span className="notification__number-display">2</span></div>
        </i>

        <img
          src="/profile.jpg"
          alt="profile"
          className="profile__image"
        />
        <div className="profile__name">
          <span>Hello !</span>
          <span>Username</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
