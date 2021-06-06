import React from 'react'
import {NavLink} from 'react-router-dom'
const DropdownItem = ({path,title,...args}) => {
console.log("path",path)
    return (
        <NavLink to={path} {...args} className="nav__dropdown-item" activeClassName="nav__dropdown-item dropdown-active">
        <span>{title}</span>
      </NavLink>
    )
}

export default DropdownItem
