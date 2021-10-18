import React from 'react'
import Navbar1 from '../components/Navbar1';
import '../styles/Main.css';

export default function Main() {
    return (

<div>
  <Navbar1/>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="back1.jpg" className="d-block w-100" alt="..." width = "828 px" height = "552px"/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Home Service</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    </div>
    </div>

    <div className="demotext d-flex p-2 bd-highlight hex m-2" >
               <br/>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 bac shadow-lg p-3 mb-5 bg-body rounded ml-10">
            <div className="col">
                <div className="card shadow-sm">
                  <img src="acf.jpg" alt="" height="250px"   className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>AC Service</strong> </p>


                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="app.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Appliance Repair</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="PainterDecorator_2_Banner.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Painters</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="cleaning.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Cleaning & Disinfection</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="electrician.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Electricians</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm hex">
                  <img src="plumber.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Plumbers</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="carpenter.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Carpenters</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="pest.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Pest Control</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="sw.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Salon For Women</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="sm.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Salon For Men</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="spw.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Spa For Women</strong> </p>

                  </div>


                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                  <img src="mm.jpg" alt="" height="250px" className="circular"/>

                  <div className="card-body center">
                      <p className="card-text pd-10"><strong>Massage For Men</strong> </p>

                  </div>


                </div>
            </div>

        </div>
        <div>
            <section className = "appliance">
            <div>
                <h2 className = "sect-head">Appliances</h2>
                <p className = "sect-head">Servicing Repair Installation And Uninstallation</p>
                <div className = "img">
                    <div>
                    <img src = "acf.jpg"/>
                    <p>Air Conditioner</p>

                    </div>
                    <div>
                    <img src = "Fvf.jpg"/>
                    <p>Water Purifier</p>

                    </div>
                    <div>
                    <img src = "wmf.jpg"/>
                    <p>Washing Machine</p>

                    </div>
                </div>
            </div>

            </section>


        </div>
        <div>
            <section className = "appliance">
            <div>
                <h2 className = "sect-head">Cleaning & Pest Control</h2>
                <p className = "sect-head">Remove hard stains & more</p>
                <div className = "img">
                    <div>
                    <img src = "cf.jpg"/>
                    <p>Car Cleaning</p>

                    </div>
                    <div>
                    <img src = "scf.jpg"/>
                    <p>Sofa & Carpet Cleaning</p>

                    </div>
                    <div>
                    <img src = "pest1.jpg"/>
                    <p>Pest Control</p>

                    </div>
                </div>
            </div>

            </section>


        </div>

        <section className = "appliance ">
          <div>

            <h1 className = "sect-head">Customer Safety Is Our Priority</h1>
            <p className = "sect-head">what customtomer are saying about our safety standards</p>
         </div>
        <div class="wrapper">
    <div class="box">
      <i class="fas fa-quote-left quote"></i>
      <p>One Stop Shop solution for all your needs at your doorstep..staying focused on hygiene and sanitization.</p>
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
          <img src="images/profile-1.jpeg" alt=""/>
        </div>
      </div>
    </div>
    <div className="box">
      <i className="fas fa-quote-left quote"></i>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat .</p>
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
          <img src="vanila_milk.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div className="box">
      <i className="fas fa-quote-left  quote"></i>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thura.</p>
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
          <img src="images/profile-3.jpeg" alt=""/>
        </div>
      </div>
    </div>
  </div>

            </section>
            <div class="footer-basic">
        <footer>
            <div class="social"><a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Smart Colony © 2021</p>
        </footer>
    </div>



</div>


    )
}
