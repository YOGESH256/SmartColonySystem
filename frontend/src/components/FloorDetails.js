import imgs from "../pages/ImageMap";
import axios from 'axios'


 var floorDetails = [];



const floorDetail = async() => {
const ko  =   await axios.get('http://localhost:4000/');
return ko;

}

// floorDetail();

export { floorDetail };
