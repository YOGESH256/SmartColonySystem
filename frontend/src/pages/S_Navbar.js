import React, { useState } from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../Utils/x.svg";
import { ReactComponent as MenuIcon } from "../Utils/menu.svg";
// import "../styles/Navbar.css";

import "../styles/Service.css";
import S_Home from './S_Home'
import HowitWorks from "../components/HowitWorks";
import Accordian from "../components/Accordian";
import {Contactus} from './Contactus';

const R_Navbar = () => {
  let { path, url } = useRouteMatch();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="S_cntct">
             <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <Link to="" className="logo-container">
                Smart<font>Colony</font>
              </Link>
            </div>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item home">
                    <Link className="nav-link active"
                    aria-current="page" to={`${url}/home`}>Home</Link>
                  </li>
                  <li className="nav-item home">
                    <Link className="nav-link active"
                    aria-current="page" to={`${url}/joinus`}>Accordian</Link>
                  </li>
                  <li className="nav-item home">
                    <Link className="nav-link active"
                    aria-current="page" to={`${url}/contactus`}>Contact Us</Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      <div className="S_content" style={{ minHeight: "calc(100vh - 240px)" }}>
        <Switch>
          <Route exact path={path} component={S_Home} />
          <Route path="/service/home" component={S_Home} />
          <Route path="/service/joinus" component={Accordian} />
          <Route path="/service/contactus" component={Contactus} />
        </Switch>
      </div>
    </div>
  );
};

export default R_Navbar;
