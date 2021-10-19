

// import Main from "./pages/Main";
// import { Contactus } from "./pages/Contactus";
// import { Contact } from "./pages/Contact";
// import VideoTour from "./pages/videoTour";
// import FloorPlans from './pages/FloorPlans';
// import Amenities from './pages/Amenities';
// import RentalHome from './pages/rentalHome'
// import Accordian from './components/Accordian'
// import AboutWorker from './components/AboutWorker'
// import ServiceDetails from './pages/ServiceDetails'

// import { BrowserRouter as Router,Switch,Route,Link  } from "react-router-dom";
// function App() {
//   return (
//     <div  >
//       <Router>
//         <Switch>   
//           <Route exact path="/accor">
//             <Accordian/>
//           </Route>
//           <Route exact path="/Services">
//             <Main/>
//           </Route>
//           <Route exact path="/Workers">
//             <AboutWorker/>
//           </Route>
//           <Route exact path="/bc">
//             <ServiceDetails/>
//           </Route>
//         </Switch>

//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { useLocation, Route, Switch } from "react-router-dom";

import Home from './pages/HomeComponent'
import Rental from './pages/R_Navbar'
import Services from "./pages/S_Navbar"

import './App.css';
function App() {
  const location = useLocation();

  return (
    <div className="App">
        <div className="content" style={{minHeight:"calc(100vh - 240px)"}}>
      <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
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
