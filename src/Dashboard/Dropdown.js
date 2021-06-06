import React from 'react'
import {useLocation} from 'react-router-dom'
const Dropdown = ({icon,title,children,pathArray,handleDropdown,dropdown}) => {
  const location = useLocation()
  console.log("location",location)
    return (
        <div className="nav_dropdown">
        <div
          className="dropdown__nav__link"
          onClick={(e) => handleDropdown(e, "1")}
        >
          <div
         
           className={ pathArray.includes(location.pathname) ?
           "nav-link active":"nav-link"}
           >
            <i className={`${icon} nav__icon`}></i>
            <span className="nav__name">{title}</span>
          </div>
          <i
            className="bx bx-chevron-down nav__icon nav__dropdown-icon dropdown-icon"
          ></i>
        </div>

        {dropdown.includes("1") && (
          <div className="nav__dropdown-collapse">
            <div className="nav__dropdown-content">
            {children}
            </div>
          </div>
        )}
      </div>
    )
}

export default Dropdown
