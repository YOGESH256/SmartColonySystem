import React  , {useEffect , useState } from 'react'
// import "../styles/Request.css"
import {Button, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Request() {

  const location = useLocation();

  const [workerSpec , setWorkerSpec] = useState([]);


console.log(location.state);

const updateInvoiceData = async () => {
  const result = await axios.post('http://localhost:4000/getWorkerByService',location.state).catch(e => console.log(e));
  console.log(result.data);
  setWorkerSpec(result.data);
};


useEffect(() => {
  updateInvoiceData();
} , [])


const submitHandler = async (worker_id) => {

  const ol =  JSON.parse(localStorage.getItem('User'))
  // console.log(ol._id);
  const user_id = ol._id;
  const i = {worker_id,user_id}
  console.log(i);
  const result = await axios.post('http://localhost:4000/order',i).catch(e => console.log(e));
  console.log(result);

  // console.log(id);

}

  return (
    <div className='plum'>
        <h3 style={{display:'grid', justifyContent:'center', marginTop:'50px'}}>All plumbers are here!</h3>
        <div className='map-team-cards'>
        {workerSpec.map (data => {
          return <div className="card-box">
            <div id="st-box">
              <img
                src=""
                alt="Person"
                class="card__image"
              />
              <p class="card__name">{data.username}</p>
              <div class="grid-container">
                <div class="">4 stars</div>
              </div>
              <button onClick = {() => submitHandler(data._id)} class="btn draw-border"><a href="/request">Book Now</a></button>
              <button class="btn draw-border">{data.contactNo}</button>
              <button class="btn draw-border">Rs {data?.price}</button>
              <label for="appt">Select a time:</label>
              <input type="time" id="appt" name="appt" />
              <input type="submit" />
              <label for="appt">Select a time:</label>
              <input type="time" id="appt" name="appt" />
              <input type="submit" />
            </div>

            <div id="nd-box" className='scroll'>
              <h2>{data.services}</h2>
              <li>Leakage<br /></li>
              <p><br />
                {data.descriptionofworker}
              </p>
            </div>

          </div>
        })}
        </div>

    </div>
    )
}
