import React, { Component, Fragment } from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Container, Row } from "react-bootstrap";
import FloorCard from "../components/FloorCards";
import { floorDetail, staticDetails } from "../components/FloorDetails";
// import "../styles/FloorPlan.css";

const opBed = [
  { value: "0", label: "Studio" },
  { value: "1", label: "1 Bed" },
  { value: "2", label: "2 Beds" },
  { value: "3", label: "3 Beds" },
];
const opBath = [
  { value: "1", label: "1 Bathroom" },
  { value: "1.5", label: "1.5 Bathrooms" },
  { value: "2", label: "2 Bathrooms" },
];

const setDetails = {
  bedrooms: [],
  bathrooms: [],
  unitSize: "",
  price: 0,
};

//for development purposes
let db = staticDetails;

export const Plans=() =>{
  // let db = props.data;
  const [state, setState] = useState(true);
  
  // Options and Input form to be displayed
  function Options(){
    const min = new Date().toLocaleString();

    return (
      <Container className="plan-options">
        <label for="bedrooms">
          Bedrooms:
          <Select
            // defaultValue={(state.map((info) =>{ return(info.bedrooms)}))}
            defaultValue={setDetails.bedrooms}
            isMulti
            name="colors"
            options={opBed}
            isSearchable={true}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => {
              setDetails.bedrooms = e;
              console.log(setDetails);
              setState(!state);
            }}
          />
        </label>
        <label for="bathrooms">
          Bathrooms:
          <Select
            defaultValue={setDetails.bathrooms}
            isMulti
            name="colors"
            options={opBath}
            isSearchable={true}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => {
              setDetails.bathrooms = e;
              console.log(setDetails);
              setState(!state);
            }}
          />
        </label>
        <label for="price">
            Max Price:
            <div class="input-group">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="validationTooltipUsernamePrepend"
                >
                  &#8377;
                </span>
              </div>
              <input
                type="number"
                class="form-control"
                id="validationTooltipUsername"
                placeholder="Max Price"
                aria-describedby="validationTooltipUsernamePrepend"
                maxlength={6}
                max={999999}
                onChange={(e) => {
                  setDetails.price = e.target.value;
                  // setState();
                  setState(
                    db.filter((info) => {
                      return(
                        setDetails.bedrooms.includes(info.bedrooms)
                      )
                    })
                  )
                }}
              />
              </div>
          </label>
        <label for="unit-size">
            Unit Size:
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                id="validationTooltipUsername"
                placeholder="Min Unit Size"
                aria-describedby="validationTooltipUsernamePrepend"
                maxlength="6"
                onChange={(e) => {
                  setDetails.unitSize = e.target.value;
                  // setState();
                  setState(
                    db.filter((info) => {
                      return(
                        setDetails.bedrooms.includes(info.bedrooms)
                      )
                    })
                  )
                }}
              />
              <div class="input-group-append">
                <span class="input-group-text">Sq.Ft.</span>
              </div>
            </div>
          </label>
        <label for="start">
          Start date:
          <div>
            <input
              type="date"
              id="start"
              name="Move-In-Date"
              placeholder="yyyy-mm-dd"
              min={min}
              onChange={(e) => {
                setDetails.mvInDate = e.target.value;
                // setState();
                setState(
                  db.filter((info) => {
                    return(
                      setDetails.bedrooms.includes(info.bedrooms)
                    )
                  })
                )
              }}
            />
          </div>
        </label>
      </Container>
    );
  };

  let a = {
    bedrooms: [],
    bathrooms: [],
    unitSize: "",
    price: 0,
  };
  setDetails.bedrooms.forEach((value, index, array) => { a.bedrooms = a.bedrooms.concat(value.value)}) 
  setDetails.bathrooms.forEach((value) => { a.bathrooms = a.bathrooms.concat(value.label)}) 

return(
    <div>
        <Options />
        {/* <Map arr={state}/> */}
        <div className="map-team-cards">
        {db.filter(info => {
            if (a.bedrooms.length === 0)
                return true
            else
                return (a.bedrooms.includes(info.bedrooms))
        })
        .filter(info => {
            if (a.bathrooms.length === 0)
                return true
            else
                return (a.bathrooms.includes(info.bhk))
        })
        .map(info => {
          return (
            <FloorCard
              type={info.type}  
              subtype={opBed[info.bedrooms].label}
              bed={info.bhk}
              size={info.unitSize}
              imageUrl={info.planImg}
              price={info.price}
              available={info.available}
              key={info._id}
              // key={index}
            />
          )}
        )}
      </div>
    </div>
  )
};

const FloorPlans = () => {

  const [remoteDetls, setRemoteDetls] = React.useState([]);

  useEffect(()=> async function(){
    try {
      const io = await floorDetail();
      console.log(io);
      setRemoteDetls(io.data);
      console.log(io.data)
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Container className="content-width">
      <h1 style={{display:"flex", justifyContent:"center"}}>Floor Plans</h1>
        <Plans />
    </Container>
  );
};

export default FloorPlans;