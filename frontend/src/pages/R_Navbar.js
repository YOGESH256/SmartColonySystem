import React, { useState } from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../Utils/x.svg";
import { ReactComponent as MenuIcon } from "../Utils/menu.svg";
// import "../styles/Navbar.css";
import "../styles/Rental.css";

import R_Home from "./R_Home";
import FloorPlans from "./FloorPlans";
import Contact from "./Contact";
import VideoTour from "./VideoTour";
import Amenities from "./Amenities";
import Brochure from "./Brochure";
import Form from "./Form";
import Mapbox from "./Mapbox";

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
              <Link to={`${url}/floorplans`}>Floor Plans</Link>
            </li>
            <li className="R_option" onClick={closeMobileMenu}>
              <Link to={`${url}/photos`}>Photos+Map</Link>
            </li>
            <li className="R_option" onClick={closeMobileMenu}>
              <Link to={`${url}/amenities`}>Amenities</Link>
            </li>
            <li className="R_option" onClick={closeMobileMenu}>
              <Link to={`${url}/vediotour`}>Vedio Tour</Link>
            </li>
            <li className="R_option" onClick={closeMobileMenu}>
              <Link to={`${url}/rentroom`}>Brochure</Link>
            </li>
            <li className="R_option" onClick={closeMobileMenu}>
              <Link to={`${url}/contact`}>Conatact Us</Link>
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
          <Route exact path={path} component={R_Home} />
          <Route path="/rental/home" component={R_Home} />
          <Route path="/rental/floorplans" component={FloorPlans} />
          <Route path="/rental/photos" >
              Photos<br />
              <Mapbox />
          </Route>
          <Route path="/rental/amenities" component={Amenities} />
          <Route path="/rental/vediotour" component={VideoTour} />
          <Route path="/rental/rentroom" >
            <Brochure />
          </Route>
          <Route path="/rental/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
};

export default R_Navbar;
