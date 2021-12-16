// eslint-disable-next-line no-restricted-globals
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from  '../components/Amencomp/Header';
import Image from  '../components/Amencomp/Image';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { intialPinCode } from "./Mapfn.js";

import { useLocation } from "react-router-dom";

const Mapbox = () => {
  const location = useLocation();
  console.log(location);

  const hi = async () => {
    const loo = await intialPinCode(444601);

    setCoordinates({
      latitude: loo.lat,
      longitude: loo.lng,
    });

    setViewport({
      width: "100%",
      height: "100%",
      latitude: loo.lat,
      longitude: loo.lng,
      zoom: 12,
    });
  };

  const [selectedLocation, setSelectedLocation] = useState({});
  const [postalCode, setPostalCode] = useState("");

  const [coordinates, setCoordinates] = useState({
    latitude: 37.14,
    longitude: -122,
  });

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    zoom: 12,
  });

  useEffect(() => {
    hi();
  }, [handleChange]);

  var handleChange = async (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
    const pin = e.target[0].value;

    const lo = await Promise.all([
      fetch(
        `http://open.mapquestapi.com/geocoding/v1/address?key=4kNrxkAjBDGNKdvOKlAhbAZfmlG7qOgM&postalCode=${pin}`
      ),
    ])
      .then(async ([aa]) => {
        const a = await aa.json();
        return a;
      })
      .then((responseText) => {
        return responseText.results[0].locations[0].latLng;
      })
      .catch((err) => {
        console.log(err);
      });

    setViewport({
      width: "100%",
      height: "100%",
      latitude: lo.lat,
      longitude: lo.lng,
      zoom: 12,
    });

    setCoordinates({
      latitude: lo.lat,
      longitude: lo.lng,
    });
  };

  return (
    <>
      <div className="container classH"></div>
      <h1 style={{display:"flex", justifyContent:"center"}}>Mapbox</h1>

      <div className="container pt-2 pb-5">
        <form onSubmit={handleChange}>
          <div className="form-group">
            <label>Postal code</label>
            <input
              type="text"
              className="form-control w-50"
              id="exampleInputEmail1"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Enter Your Pincode
            </small>
          </div>

          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </div>

      <div className="container koo" style={{marginBottom:"50px"}}>
        <ReactMapGL
          mapStyle="mapbox://styles/yogeshkhatri/cks1qh67i2i9017lflkd0g3t6"
          mapboxApiAccessToken="pk.eyJ1IjoieW9nZXNoa2hhdHJpIiwiYSI6ImNrczFwb3VpZzF3MngycHBzdnVyY2JneGoifQ.5r167zpS6Z-kK7Y-xobAGA"
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          <Marker
            longitude={coordinates.longitude}
            latitude={coordinates.latitude}
            offsetLeft={-20}
            offsetRight={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(coordinates)}
              className="bounce"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.longitude === coordinates.longitude ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeonClick={true}
              longitude={coordinates.longitude}
              latitude={coordinates.latitude}
            >
              Location
            </Popup>
          ) : (
            false
          )}
        </ReactMapGL>
      </div>
    </>
  );
};

export default Mapbox;
