import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "../components/Amencomp/Image";
import AmenInside from "../components/Amencomp/AmenInside";
import AmenInside2 from "../components/Amencomp/AmenInside2";
import { Link } from "react-router-dom";
// import './styles.css'
const Brochure = () => {
  return (
    <>
      <Image />

      <div className="container mt-5">
        <h3>Brochure </h3>
        <div className="row">
          <div className="col">
            <div className="table-responsive table-card mt-2">
              <table className="table table-bordered role">
                <thead className="thead-light">
                  <tr>
                    <th id="selectFloorPlan" scope="col">
                      <div className=" pl-0 checkbox">
                        <input
                          id="linkCheckAll"
                          onclick="checkuncheckFP()"
                          aria-label="Select All Floor Plans"
                          type="checkbox"
                          className=""
                          value=""
                        />
                        <label
                          aria-hidden="true"
                          for="linkCheckAll"
                          className="m-0"
                        >
                          {" "}
                        </label>
                      </div>
                    </th>
                    <th scope="col">Floor Plan</th>
                    <th scope="col">Bed</th>
                    <th scope="col">Bath</th>
                    <th scope="col">Sq.Ft.</th>
                    <th scope="col">Rent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-card-check">
                      <div className=" checkbox">
                        <input
                          aria-label="Select Floor Plan High-Rise Studio"
                          data-selenium-id="FPSelect_1"
                          id="FP_372071"
                          type="checkbox"
                          className="form-check-input"
                          value=""
                        />
                        <label aria-hidden="true" for="FP_372071">
                          {" "}
                        </label>
                      </div>
                    </td>
                    <th className="td-card-name" scope="row">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        aria-label="High-Rise Studio, opens a dialog"
                        data-target="#myGalleryModal"
                        onclick="opendialog('modalbodyGallery', 'ajaxhandler?handler=gallery&amp;id=372071&amp;gallerytype=floorplan', ysi.modalCarousel.init);document.getElementById('fpname').innerHTML='High-Rise Studio';"
                      >
                        <span data-selenium-id="Floorplan1Name">
                          High-Rise Studio
                        </span>
                      </a>
                    </th>
                    <td className="td-card-beds">
                      <p className="d-block d-lg-none td-label">Beds:</p>{" "}
                      <span data-selenium-id="Floorplan1Beds">Studio </span>
                    </td>
                    <td className="td-card-baths">
                      <p className="d-block d-lg-none td-label">Baths:</p>{" "}
                      <span data-selenium-id="Floorplan1Baths">1</span>
                    </td>
                    <td className="td-card-sqft">
                      <p className="d-block d-lg-none td-label">Sq.Ft.:</p>{" "}
                      <span data-selenium-id="Floorplan1SqFt">400</span>
                    </td>
                    <td className="td-card-rent">
                      <p className="d-block d-lg-none td-label">Rent:</p>
                      <span data-selenium-id="Floorplan1Rent">$1,250</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="td-card-check">
                      <div className=" checkbox">
                        <input
                          aria-label="Select Floor Plan High-Rise Studio"
                          data-selenium-id="FPSelect_1"
                          id="FP_372071"
                          type="checkbox"
                          className="form-check-input"
                          value=""
                        />
                        <label aria-hidden="true" for="FP_372071">
                          {" "}
                        </label>
                      </div>
                    </td>
                    <th className="td-card-name" scope="row">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        aria-label="High-Rise Studio, opens a dialog"
                        data-target="#myGalleryModal"
                        onclick="opendialog('modalbodyGallery', 'ajaxhandler?handler=gallery&amp;id=372071&amp;gallerytype=floorplan', ysi.modalCarousel.init);document.getElementById('fpname').innerHTML='High-Rise Studio';"
                      >
                        <span data-selenium-id="Floorplan1Name">
                          High-Rise Studio
                        </span>
                      </a>
                    </th>
                    <td className="td-card-beds">
                      <p className="d-block d-lg-none td-label">Beds:</p>{" "}
                      <span data-selenium-id="Floorplan1Beds">Studio </span>
                    </td>
                    <td className="td-card-baths">
                      <p className="d-block d-lg-none td-label">Baths:</p>{" "}
                      <span data-selenium-id="Floorplan1Baths">1</span>
                    </td>
                    <td className="td-card-sqft">
                      <p className="d-block d-lg-none td-label">Sq.Ft.:</p>{" "}
                      <span data-selenium-id="Floorplan1SqFt">400</span>
                    </td>
                    <td className="td-card-rent">
                      <p className="d-block d-lg-none td-label">Rent:</p>
                      <span data-selenium-id="Floorplan1Rent">$1,250</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-card-check">
                      <div className=" checkbox">
                        <input
                          aria-label="Select Floor Plan High-Rise Studio"
                          data-selenium-id="FPSelect_1"
                          id="FP_372071"
                          type="checkbox"
                          className="form-check-input"
                          value=""
                        />
                        <label aria-hidden="true" for="FP_372071">
                          {" "}
                        </label>
                      </div>
                    </td>
                    <th className="td-card-name" scope="row">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        aria-label="High-Rise Studio, opens a dialog"
                        data-target="#myGalleryModal"
                        onclick="opendialog('modalbodyGallery', 'ajaxhandler?handler=gallery&amp;id=372071&amp;gallerytype=floorplan', ysi.modalCarousel.init);document.getElementById('fpname').innerHTML='High-Rise Studio';"
                      >
                        <span data-selenium-id="Floorplan1Name">
                          High-Rise Studio
                        </span>
                      </a>
                    </th>
                    <td className="td-card-beds">
                      <p className="d-block d-lg-none td-label">Beds:</p>{" "}
                      <span data-selenium-id="Floorplan1Beds">Studio </span>
                    </td>
                    <td className="td-card-baths">
                      <p className="d-block d-lg-none td-label">Baths:</p>{" "}
                      <span data-selenium-id="Floorplan1Baths">1</span>
                    </td>
                    <td className="td-card-sqft">
                      <p className="d-block d-lg-none td-label">Sq.Ft.:</p>{" "}
                      <span data-selenium-id="Floorplan1SqFt">400</span>
                    </td>
                    <td className="td-card-rent">
                      <p className="d-block d-lg-none td-label">Rent:</p>
                      <span data-selenium-id="Floorplan1Rent">$1,250</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brochure;
