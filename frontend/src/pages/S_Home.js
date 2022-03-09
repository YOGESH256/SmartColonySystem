import React from "react";
import { Link } from 'react-router-dom';
import { urldata } from "./S_Navbar";

import {homeImg} from "../components/ImageMap";
import { useHistory, useLocation } from 'react-router';
import axios from 'axios'

export default function Main() {

  const history = useHistory();

  // const [servce , setService] = useState("")

  const service = [
    {path:"ac", name:"AC Service", img:homeImg.p1},
    {path:"", name:"Appliance Repair", img:homeImg.p2},
    {path:"", name:"Painters", img:homeImg.p3},
    {path:"", name:"Cleaning & Disinfectant", img:homeImg.p4},
    {path:"electricians", name:"Electricians", img:homeImg.p5},
    {path:"plumbers", name:"Plumbers", img:homeImg.p6},
    {path:"", name:"Carpenters", img:homeImg.p7},
    {path:"", name:"Pest Control", img:homeImg.p8},
    {path:"", name:"Salon For Women", img:homeImg.p9},
    {path:"", name:"Salon For Men", img:homeImg.p10},
    {path:"", name:"Spa For Women", img:homeImg.p11},
    {path:"", name:"Massage For Men", img:homeImg.p12},
  ]

const selectWorker = (op) => {

console.log(op);


history.push({
  pathname: '/workerselect',
  state: {  // location state
    servce : op,
    serce : "m"
  },
});



}





  let SectionA = ()=>{
    return(

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 bac shadow-lg p-3 mb-5 bg-body rounded ml-10">
        {service.map((info)=>{
          return(

            // <Link to={`${urldata}/${info.path}`} className="">
            <div className="col">
              <div className="card shadow-sm">

              <a   onClick = {() => {  selectWorker(info.name);   }}  >
                <img  src={info.img}  style = {{ "padding-left" : "50px"}}alt="" height="250px" className="circular" />
              </a>
                <div className="card-body center">
                  <p   style = {{ "padding-left" : "150px"}}className="card-text pd-10"><strong>{info.name}</strong>{" "}
                  </p>

                </div>
              </div>
              </div>
            // </Link>
          )
        })}
        </div>
  )};

  return (
    <div className="S-hm">

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">

            <img
              src={homeImg.carousel}
              className="d-block w-100"
              alt="..."
              width="828 px"
              height="552px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Home Service</h1>
              <plumberNo />
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="demotext d-flex p-2 bd-highlight hex m-2">
        <br />
      </div>
      <SectionA />

      <section className="part-2">
        <div>
          <h2 className="sect-head">Appliances</h2>
          <p className="sect-head">Servicing Repair Installation And Uninstallation
          </p>
          <div className="img">
            <div>

              <img src={homeImg.p1} alt="" />

              <p>Air Conditioner</p>

            </div>
            <div>
              <img src={homeImg.appl2} alt="" />
              <p>Water Purifier</p>
            </div>
            <div>
              <img src={homeImg.appl3} alt="" />
              <p>Washing Machine</p>
            </div>
          </div>
        </div>
      </section>

      <section className="part-2">
        <div>
          <h2 className="sect-head">Cleaning & Pest Control</h2>
          <p className="sect-head">Remove hard stains & more</p>
          <div className="img">
            <div>
              <img src={homeImg.clean1} alt="" />
              <p>Car Cleaning</p>
            </div>
            <div>
              <img src={homeImg.clean2} alt="" />
              <p>Sofa & Carpet Cleaning</p>
            </div>
            <div>
              <img src={homeImg.p8} alt="" />
              <p>Pest Control</p>
            </div>
          </div>
        </div>
      </section>

      <section className="part-2">
        <div>
          <h1 className="sect-head">Customer Safety Is Our Priority</h1>
          <p className="sect-head">
            what customer are saying about our safety standards
          </p>
        </div>
        <div class="wrapper">
          <div className="box">
            <i class="fas fa-quote-left quote"></i>
            <p>
              One Stop Shop solution for all your needs at your
              doorstep..staying focused on hygiene and sanitization.
            </p>
            <div className="content">
              <div className="info">
                <div className="name">Soham Das</div>
                <div className="job">Designer | Developer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="images/profile-1.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p>
              Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
              elitits. Expedita reiciendis itaque placeat .
            </p>
            <div className="content">
              <div className="info">
                <div className="name">Yogesh Khatri</div>
                <div className="job">YouTuber | Blogger</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="vanila_milk.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left  quote"></i>
            <p>
              Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
              elitits. Expedita reiciendis itaque placeat thura.
            </p>
            <div className="content">
              <div className="info">
                <div className="name">Meet Patel</div>
                <div className="job">Freelancer | Advertiser</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="images/profile-3.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li class="list-inline-item">
              <a href="#">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">Smart Colony © 2021</p>
        </footer>
      </div>
    </div>
  );
}
