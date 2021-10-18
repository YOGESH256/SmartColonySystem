

import Main from "./pages/Main";
import { Contactus } from "./pages/Contactus";
import { Contact } from "./pages/Contact";
import VideoTour from "./pages/videoTour";
import FloorPlans from './pages/FloorPlans';
import Amenities from './pages/Amenities';
import RentalHome from './pages/rentalHome'
import Accordian from './components/Accordian'
import AboutWorker from './components/AboutWorker'
import ServiceDetails from './pages/ServiceDetails'






import { BrowserRouter as Router,Switch,Route,Link  } from "react-router-dom";
function App() {
  return (
    <div  >


      <Router>


        <Switch>
          
          <Route exact path="/joinus">
           <Contactus/>


          </Route>
          <Route exact path="/rentalHome">
           <RentalHome/>


          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>

          <Route exact path="/vid">
            <VideoTour/>
          </Route>
          <Route exact path="/">
            <FloorPlans/>
          </Route>
          <Route exact path="/amenities">
            <Amenities/>
          </Route>
          <Route exact path="/accor">
            <Accordian/>
          </Route>
          <Route exact path="/Services">
            <Main/>
          </Route>
          <Route exact path="/Workers">
            <AboutWorker/>
          </Route>
          <Route exact path="/bc">
            <ServiceDetails/>
          </Route>




        </Switch>

      </Router>
    </div>
  );
}

export default App;
