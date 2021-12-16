import React, { useState } from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../Utils/x.svg";
import { ReactComponent as MenuIcon } from "../Utils/menu.svg";
import "../styles/Admin.css";

import A_Home from "./A_Home";
import A_Approve from "./A_Approve";

const R_Navbar = () => {
  let { path, url } = useRouteMatch();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <div className="R_header">
        <div className="logo-nav">
          <div className="logo-container">
          <Link to="" className="logo-container">
            Smart<font>Colony</font>
            </Link>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="R_option" onClick={closeMobileMenu}>
              <Link to={`${url}/home`}>Home</Link>
            </li>
            <li className="R_option" onClick={closeMobileMenu}>
              <Link to={`${url}/approve`}>Approve</Link>
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
      <div className="R_content" style={{ minHeight: "calc(100vh - 240px)" }}>
        <Switch>
          <Route exact path={path} component={A_Home} />
          <Route path="/admin/home" component={A_Home} />
          <Route path="/admin/approve" component={A_Approve} />
        </Switch>
      </div>
    </div>
  );
};

export default R_Navbar;
