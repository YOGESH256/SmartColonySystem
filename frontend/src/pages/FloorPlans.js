import React, { Component, Fragment } from "react";
import {useEffect , useState} from 'react'
import Select from 'react-select';
import { Container, Row } from "react-bootstrap";
import FloorCard from '../components/FloorCards'
import { floorDetail } from "../components/FloorDetails";
import "../styles/FloorPlan.css";

const opBed = [
  { value: '0', label: 'Studio' },
  { value: '1', label: '1 Bed' },
  { value: '2', label: '2 Beds' },
  { value: '3', label: '3 Beds' },
]
const opBath = [
  { value: '1', label: '1 Bathroom' },
  { value: '1.5', label: '1.5 Bathrooms' },
  { value: '2', label: '2 Bathrooms' },
]


const setDetails = {
    bedrooms: [],
    bathrooms: [],
    unitSize: "",
    price: 0,
};




// Here instead of floorDetails, filterDetls will come in future

// let floorCards = floorDetails.map((info, index) => {
//   return (
//
//       )
//     });

const FloorPlans = () => {
const [filterDetls, setFilterDetls] = React.useState([]);

  useEffect(async () => {



    try {
      const io  = await floorDetail()
      console.log(io);
      setFilterDetls(io.data)
    } catch (e) {
      console.log(e);
    }



  } , [])



  const Options = () => {
    return (
      <Container className="options">
        <Select
          defaultValue=""
          isMulti
          name="colors"
          options={opBed}
          isSearchable={true}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e)=> {
            let arr = [];
            for(var i = 0; i < e.length; i++){
              arr.concat(...[e[i].value])
              console.log(e[i])
            }
            console.log(setDetails)
              }} />
        <Select
          defaultValue=""
          isMulti
          name="colors"
          options={opBath}
          isSearchable={true}
          className="basic-multi-select"
          classNamePrefix="select"
           />
        {/* other options for unit size, price range will come in future */}

        <label for="start">Start date:</label>
        <input type="date" id="start" name="Move In Date"
         value="2018-07-22"
         min="2018-01-01" max="2018-12-31" />
      </Container>
    );
  };



  const filter = (selectedIndex, e) => {

    // setIndex(selectedIndex);
  };

  // const [bedrooms, setBedrooms] = React.useState("");
  // const [bathrooms, setBathrooms] = React.useState("");
  // const [unitSize, setUnitSize] = React.useState("");
  // const [priceRange, setPriceRange] = React.useState("");
  // const [moveInDate, setMoveInDate] = React.useState("");
  // const [apprmtNo, setApprmtNo] = React.useState("");

  return (
    <Container>
      <h1>Floor Plans</h1>

      <Options />
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
            {/* <h1 className="mb-4" style={{alignText:"center"}}>BE Council Members</h1> */}
            <div className="map-team-cards">

            {filterDetls.map((floo) => (



                <FloorCard
              type = {floo.type}
              subtype={floo.bedrooms}
              bed={floo.bhk}
              size={floo.unitSize}
              imageUrl={floo.image}
              price={floo.price}
              available={floo.available}
              key={floo._id}
                />



            ))}
            </div>
        </div>
    </Container>
  );
};

export default FloorPlans;

// import React, { Component } from 'react'
// import Select from 'react-select'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const FloorPlans = () => (
//   <Select options={options} />
// )

// export default FloorPlans;
