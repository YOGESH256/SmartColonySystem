import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import rentalHome from './pages/rentalHome';
import videoTour from './pages/videoTour';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route component={rentalHome} path="/" exact /> 
          <Route component = {videoTour} path="/" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
