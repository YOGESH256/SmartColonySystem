import React from "react";
import { contactImg } from "../components/ImageMap";
// import "../App.css";

export const Contactus = () => {
  return (
    <div className="S-cn">
      <div
        id="carouselExampleCaptions"
        className="carousel slide back-sect-cont"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={contactImg.carousel}
              className="d-block w-100"
              alt="..."
              width="1450 px"
              height="450px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Home Service</h5>
            </div>
          </div>
        </div>
      </div>

      <section className="sect-2">
        <h3>
          Start earning straight away. Share your details and we will reach out
          with next steps.
        </h3>
        <form className="form-work">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <input
            type="tel"
            className="form-control"
            placeholder="Add your number"
          />
          <br />
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <br />
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="What do you do ?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <br />
          <button type="button" class="btn btn-outline-success">
            Success
          </button>
        </form>
      </section>

      <section className="sect-3">
        <div>
          <h1 className="sect-head">
            Join Smart Colony System to change your life{" "}
          </h1>
          <p className="sect-head">
            Smart Colony System is an app based marketplace that emowers
            rofessionals like you to become your own boss
          </p>
          <div className="img">
            <div>
              <img src={contactImg.p1} alt="NA" />
              <p>Partners already on board</p>
            </div>
            <div>
              <img src={contactImg.p2} alt="NA" />
              <p>Paid out to Partners in 2019</p>
            </div>
            <div>
              <img src={contactImg.p3} alt="NA" />
              <p>Services delivered each month</p>
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
          <p class="copyright">Smart Colony System © 2021</p>
          <p>xyz</p>
        </footer>
      </div>
    </div>
  );
};
