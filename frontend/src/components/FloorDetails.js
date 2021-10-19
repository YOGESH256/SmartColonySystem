import {imgs} from "./ImageMap";
import axios from 'axios'


export const staticDetails = [
    {
      type: "High-Rise Studio",
      bedrooms: "0",
      bhk: "1 Bathroom",
      unitSize: "495",
      planImg:imgs.f1, 
      price: 1385,
      available: "A",
      tourlink: "",
    },
    {
      type: "High-Rise Studio",
      bedrooms: "1",
      bhk: "1.5 Bathrooms",
      unitSize: "400",
      planImg:imgs.f2, 
      price: 1250,
      available: "A",
      tourlink: "",
    },
    {
      type: "High-Rise Studio",
      bedrooms: "2",
      bhk: "1 Bathroom",
      unitSize: "691",
      planImg:imgs.f3, 
      price: 1610,
      available: "A",
      tourlink: "",
    },
    {
      type: "High-Rise Studio",
      bedrooms: "2",
      bhk: "2 Bathrooms",
      unitSize: "800",
      planImg:imgs.f4, 
      price: 1690,
      available: "A",
      tourlink: "",
    },
  ];

const floorDetail = async() => {
const ko  =   await axios.get('http://localhost:4000/');
return ko;

}

// floorDetail();

export { floorDetail };
