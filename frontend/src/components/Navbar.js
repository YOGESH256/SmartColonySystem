import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../Utils/x.svg";
import { ReactComponent as MenuIcon } from "../Utils/menu.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          Smart<font>Colony</font>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Home</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Floor Plans</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Photos</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Amenities</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Video Tour</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Video Tour</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Navigate</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Rent Room</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
