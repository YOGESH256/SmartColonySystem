import React from 'react'
import Navbar1 from '../components/Navbar1';

export const Contact = () => {
    return (

<>

<div>
<Navbar1 />
            <div className="container-fluid ">
    <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner container-fluid">
    <div className="carousel-item active ">
      <img src="contact.jpg" className="d-block w-100 mb-4" alt="..." height="400" width="1550"/>
    </div>

  </div>
</div>

</div>
 <div className="container">
    <form method="post" action="/contact">

    <div>
                <h1 className = "sect-head">Contact Us</h1>
                </div>

        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="name" className="form-control" id="name" name="name" placeholder="Enter Your Name"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Phone Number </label>
          <input type="tel" className="form-control" id="email" name="email" placeholder="Enter Your Phone Number"/>
        </div>



        <div className="form-group">
          <label for="desc">Message </label>
          <textarea className="form-control" id="desc"  name= "desc" rows="3"></textarea>
        </div>
        <button className="btn btn-primary my-2" type="submit">Send My Message</button>
      </form>

      <h1 className = "sect-head" style={{backgroundColor: "#ffe4c4"}}>Contact No.</h1>
      <p className = "sect-head">Yogesh Khatri: 7264881708</p>
      <p className = "sect-head">Soham Das: 7020995749</p>
      <p className = "sect-head">Meet Patel: 8849786876</p>
      <p className = "sect-head">Rohan Ghume: 9082320791</p>



      <h1 className = "sect-head" style={{backgroundColor: "#ffe4c4"}}>Visit Us</h1>
      <p className = "sect-head">Seven Spring Apartment, 9310 Cherry Hill Road. College park, MD20740</p>
      <p className = "sect-head"> 9310 Cherry Hill Road. </p>
      <p className = "sect-head">College park, MD20740</p>

      <h1 className = "sect-head" style={{backgroundColor: "#ffe4c4"}}>Office Timings</h1>
      <p className = "sect-head">Monday: 9 AM - 6 PM</p>
      <p className = "sect-head">Tuesday: 9 AM - 6 PM</p>
      <p className = "sect-head">Wednesday: 9 AM - 6 PM</p>
      <p className = "sect-head">Thursday: 9 AM - 6 PM</p>
      <p className = "sect-head">Friday: 9 AM - 6 PM</p>
      <p className = "sect-head">Saturday: 9 AM - 6 PM</p>
      <p className = "sect-head">Sunday: 9 AM - 6 PM</p>

</div>

</div>
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
            <p class="copyright">Smart Colony System © 2021</p>

        </footer>
    </div>

        </>
    )
}
