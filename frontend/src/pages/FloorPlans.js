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
  const [state, setState] = useState(db);
  let temp = state;
  
  //use this arrow funtion when state is a "let"
  // setState = () =>{
  //   state = floorDetails.filter((info) => {
  //     return(
  //       setDetails.bedrooms.includes(info.bedrooms)
  //     )
  //   });
  //   console.log('state == temp',state===temp,state);
  // } 
  
  // Options and Input form to be displayed
  function Options(){
    const min = new Date().toLocaleString();

    return (
      <Container className="plan-options">
        <label for="bedrooms">
          Bedrooms:
          <Select
            // defaultValue={(state.map((info) =>{ return(info.bedrooms)}))}
            defaultValue={{ value: '0', label: 'Studio' }}
            isMulti
            name="colors"
            options={opBed}
            isSearchable={true}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => {
              let arr = [];
              for (var i = 0; i < e.length; i++) arr = arr.concat([e[i].value]);
              setDetails.bedrooms = arr;
              // setState();
              setState(
                db.filter((info) => {
                  console.log(state)
                  return(
                    setDetails.bedrooms.includes(info.bedrooms)
                  )
                })
              )
            }}
          />
        </label>
        <label for="bathrooms">
          Bathrooms:
          <Select
            defaultValue=""
            isMulti
            name="colors"
            options={opBath}
            isSearchable={true}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => {
              let arr = [];
              for (var i = 0; i < e.length; i++) arr = arr.concat([e[i].value]);
              setDetails.bathrooms = arr;
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
        </label>
        <label for="price">
            Max Price:
            <div class="input-group">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="validationTooltipUsernamePrepend"
                >
                  $
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

  // Cards which need to be re-rendered
  // function Map(props){
  
  //   return(
  //     <div className="map-team-cards">
  //       {props.arr.map((info, index) => {
  //         return (
  //           <FloorCard
  //             type={info.type}
  //             bed={opBed[info.bedrooms].label}
  //             bath={info.bathrooms}
  //             size={info.unitSize}
  //             imageUrl={info.planImg}
  //             price={info.price}
  //             available={info.available}
  //             key={index}
  //           />
  //         )}
  //       )}
  //     </div>
  //   )
  // }
  return(
    <div>
        <Options />
        {/* <Map arr={state}/> */}
        <div className="map-team-cards">
        {state.map((info, index) => {
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
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Container className="content-width">
      <h1>Floor Plans</h1>
        <Plans />
    </Container>
  );
};

export default FloorPlans;