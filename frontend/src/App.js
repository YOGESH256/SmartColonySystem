

import Main from "./pages/Main";
import { Contactus } from "./pages/Contactus";
import { Contact } from "./pages/Contact";
import VideoTour from "./pages/videoTour";
import FloorPlans from './pages/FloorPlans';




import { BrowserRouter as Router,Switch,Route,Link  } from "react-router-dom";
function App() {
  return (
    <div >


      <Router>


        <Switch>
          <Route  exact path="/services" render={()=>{
            return (
              <>
              <Main/>

              </>
            )
          }}>

          </Route>
          <Route exact path="/joinus">
           <Contactus/>


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





        </Switch>

      </Router>
    </div>
  );
}

export default App;
