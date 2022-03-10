import React from 'react';
import { useLocation, Route, Switch } from "react-router-dom";

import Home from './pages/HomeComponent'
import Admin from './pages/A_Navbar'
import Rental from './pages/R_Navbar'
import Services from "./pages/S_Navbar"
import Worker from "./pages/W_Navbar"
import Upload_Form from './pages/Upload_form'
import Cart from './pages/Cart'
import Comment from './pages/Comment'
import Review from './pages/Review'
import Profile from './pages/Profile'
import Request from './pages/Request'
import Login from './pages/Login'
import WorkerLogin from './pages/WorkerLogin'
import AdminLogin from './pages/AdminLogin'
import WorkerSelection from './pages/WorkerSelection'
import AdminValidation from './pages/AdminValidation'
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
          <Route exact path="/adminlogin">
            <AdminLogin />
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
          <Route path="/worker">
            <Worker />
          </Route>
          <Route path="/uploadform">
            <Upload_Form />
          </Route>
         <Route path="/cart">
            <Cart />
          </Route>
         <Route path="/comments">
           <Comment/>
         </Route>
         <Route path="/review">
           <Review/>
         </Route>
         <Route path="/card">
           <Profile/>
         </Route>
         <Route path="/request">
           <Request/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>

         {/* Worker Login */}
         <Route path="/workerlogin">
           <WorkerLogin/>
         </Route>
         <Route path="/adminvalidation">
           <AdminValidation/>
         </Route>
         <Route path="/workerselect">
           <WorkerSelection/>
         </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
