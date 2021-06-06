import React,{useState} from 'react'
import Dropdown from "./Dropdown";
import NavItem from './NavItem';
import DropdownItem from './DropdownItem';
import {adminNavItem} from './NavItemController'
const SideNavBar = ({toggle}) => {
  const [dropdown, setDropdown] = useState([]);
  const handleDropdown = (e, val) => {
      e.preventDefault();
      console.log("value", val);
      let ele = [...dropdown];
      const index = ele.indexOf(val);
      if (index > -1) {
        ele.splice(index, 1);
      } else {
        ele.push(val);
      }
      console.log("ele", ele);
      setDropdown(ele);
      console.log("dropdown element", dropdown);
    };
    const logoutHandler = (e)=>{
      e.preventDefault();
      localStorage.removeItem("user");
      // router.push("/login")
    }
    return (
        <div className={toggle ? "l-navbar show" : "l-navbar"} id="nav-bar">
        <nav className="nav">
          <div>
            <a  className="nav__logo">
              <i className="bx bx-layer nav__logo-icon"></i>
              <span className="nav__logo-name">Poshyak</span>
            </a>

            <div className="nav__list">
               
                {
                  adminNavItem.map((data)=>
                    <NavItem path={data.path} title={data.title} iconClass={data.iconClass} key={data.path}/>
                  )}
                
               <Dropdown icon="bx bxs-widget"  title="Category" pathArray={["/category","/category/subcategory"]} dropdown={dropdown} handleDropdown={handleDropdown}>
                  <DropdownItem path="/category" title="Category" onClick={(e)=> handleDropdown(e,"1")}/>
                  <DropdownItem path="/category/subcategory" title="Sub Category" onClick={(e)=> handleDropdown(e,"1")}/>
                </Dropdown>
            </div>
          </div>

          <a  className="nav__link" onClick={(e)=>logoutHandler(e)}>
            <i className="bx bx-log-out nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>
    )
}

export default SideNavBar
