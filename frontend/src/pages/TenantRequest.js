import React  , {useEffect , useState } from 'react'
// import "../styles/Request.css"
import axios from 'axios'


export default function Request() {


  const [getAllRequest , setAllRequest] = useState();
  const [reques , setReques] = useState();



  useEffect(async() => {

    const result = await axios.get('http://localhost:4000/getAllRequest').catch(e => console.log(e));

    console.log(result.data.request);

    setAllRequest(result.data.request);

  } , [])




const submitHandler = (e) => {
  e.preventDefault();
  console.log(e.target.id);



}

    return (
        <div class="main32">
          <h1 className="service mr-4">Unaccepted Services</h1>


        <div class="row rahulya  ">

      { getAllRequest && getAllRequest.map(request => (

<form  className = ""  onSubmit = {submitHandler} id = {request._id}>
        <div class="col-sm-10 m-auto ">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Soham</h5>
              <p class="card-text">{request.propertyId.type}</p>
              <p class="card-text">{request.propertyId.type}</p>
              <p class="card-text"> Rs {request.propertyId.price}</p>
              <p class="card-text">{request.propertyId.unitSize}</p>
              <p class="card-text">{request.propertyId.bhk}</p>
              <p><a href={`http://localhost:4000/files/${request.aadharCard}`} class="">AadharCard</a></p>
              <p><a href={`http://localhost:4000/files/${request.panCard}`} class="">Pancard</a></p>
              <p><a href={`http://localhost:4000/files/${request.extraDocument}`} class="">extraDocument</a></p>


<select class="form-select form-select-sm mb-3 " aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  {request.propertyId?.roomnos?.map((room) => (
    <option value={room}>{room}</option>
  ))

  }


</select>

<br/>


              <button href="#" class="p-2 m-2 btn-primary">Reject</button>
              <button href="#"  type = "submit"    class="p-2 m-2 btn-danger">Accept</button>
            {  /* <a href="#" class="batu2 btn-primary">Give Timing</a> */}
            </div>
          </div>
        </div>

        </form>

      ))}








</div>

        </div>
    )
}
