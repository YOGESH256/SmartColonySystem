import React, { useState } from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../Utils/x.svg";
import { ReactComponent as MenuIcon } from "../Utils/menu.svg";
import "../styles/Admin.css";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import {W_SidebarData} from "./SidebarData";

import W_Home from "./W_Home";
import TenantRequest from "./TenantRequest";
import W_Approve from "./W_Approve";



const W_Navbar = () => {
  let { path, url } = useRouteMatch();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [wid, setWid] = useState("0%");
  const openSidenav = () => {
    setWid("15%")
  }
  const closeSidenav = ( ) => {
    setWid("0%")
  }
  const SideNav = (props) => {
    return (
      <div className="adm sidenav" style={{ width:props.width, paddingTop: "20px" }}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={wid === "15%" ? 'nav-menu active' : 'nav-menu'} >
          <ul className='nav-menu-items' >
            <li className='navbar-toggle' onClick={props.closeNav}>
              <Link to={`${url}`} className='menu-bars' >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {W_SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </div>
    );
    };

  return (
    <div className="A_header">
      <div className="R_header">
        <div className="logo-nav">

        <IconContext.Provider  value={{ color: '#fff' }}>
            <FaIcons.FaBars style={{ width:'2em', height:'2em'}} onClick={openSidenav} />
        </IconContext.Provider>
        <SideNav width={wid} closeNav={closeSidenav} />

          <div className="logo-container" style={{paddingLeft:"15vw"}}>
          <Link to="" className="logo-container">
            Smart<font>Colony</font>
            </Link>
          </div>

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
          <Route exact path={path} component={W_Home} />
          <Route path="/worker/home" component={W_Home} />
          <Route path="/worker/approve" component={W_Approve} />
        </Switch>
      </div>
    </div>
  );
};

export default W_Navbar;
