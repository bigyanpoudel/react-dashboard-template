import React from 'react'
import {NavLink} from 'react-router-dom'
const NavItem = ({path,title,iconClass}) => {
   
    return (
        <NavLink to={path} activeClassName="active"  className={
          "nav__link"
       }>
          <i className={`${iconClass} nav__icon`}></i>
          <span className="nav__name">{title}</span>
      </NavLink>

    )
}

export default NavItem
