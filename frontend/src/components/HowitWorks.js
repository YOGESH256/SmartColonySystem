import React from "react";
import "./jk.css";
import {
  FaBookOpen,
  FaBusinessTime,
  FaChevronCircleRight,
} from "react-icons/fa";

const HowitWorks = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-8 col-lg-7">
        <h6 className="text-muted">List Group with Images</h6>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="image-parent d-flex container">
              <h1>
                {" "}
                <FaBookOpen />{" "}
              </h1>
              <div className="inline-flex dist">
                <h3>Choose the Type of Service </h3>
                <p>Select the service required </p>
              </div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="image-parent d-flex container ">
              <h1>
                {" "}
                <FaBusinessTime />{" "}
              </h1>
              <div className="inline-flex dist ">
                <h3>Choose the Time Slot </h3>
                <p>We Service from 9am-9pm daily </p>
              </div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="image-parent d-flex container">
              <h1>
                {" "}
                <FaChevronCircleRight />{" "}
              </h1>
              <div className="inline-flex dist">
                <h3>Hassle Free Service </h3>
                <p>Our Professional will get in Touch with you </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default HowitWorks;
