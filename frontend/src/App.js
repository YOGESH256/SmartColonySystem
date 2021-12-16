import React from 'react';
import { useLocation, Route, Switch } from "react-router-dom";

import Home from './pages/HomeComponent'
import Admin from './pages/A_Navbar'
import Rental from './pages/R_Navbar'
import Services from "./pages/S_Navbar"

import './App.css';
function App() {
  const location = useLocation();

  return (
    <div className="App">
        <div className="content" >
        {/* <div className="content" style={{minHeight:"calc(100vh - 240px)"}}> */}
      <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/rental">
            <Rental />
          </Route>
          <Route path="/service">
            <Services />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
