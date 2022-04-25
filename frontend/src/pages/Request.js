import React from "react";
import {useEffect,useState} from "react";
import "../styles/Request.css"
import axios from 'axios'

export default function Request() {

  const [orders , setOrders] = useState([])

  const updateInvoiceData = async () => {
    const ol =  JSON.parse(localStorage.getItem('User'))
    // console.log(JSON.stringify(ol._id));
    const user_id = ol._id;
    console.log((user_id));
    const o = {user_id}
    const result = await axios.post('http://localhost:4000/getAllOrders', o).catch(e => console.log(e));
    setOrders(result.data);
    
  };


  useEffect(() => {
    updateInvoiceData();
  } , [])

  return (
    <div class="req -main">
      <h1 className="req-service">Unaccepted req-services</h1>

      <div class="row row-style">


{orders.map((order,key) => (
  <div class="col-sm-12">
    <div class="req-card">
      <div class="card-body">
        <p class="card-text">Order No : {key+1}</p>
        <h5 class="card-title">Service : {order.worker_id?.services}</h5>
        <p class="card-text">Worker Name : {order.worker_id.username}</p>
        <p class="card-text">contactNo : {order.worker_id.contactNo}</p>
        {/*<a href="#" class="req-acpt-btn btn-primary">
          Reject
        </a>
        <a href="#" class="req-rej-btn btn-primary">
          Give Timing
        </a>*/}
      </div>
    </div>
    </div>

))}




      </div>
    </div>
  );
}
