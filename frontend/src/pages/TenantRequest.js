import React  , {useEffect , useState } from 'react'
// import "../styles/Request.css"
import axios from 'axios'


export default function Request() {


  const [getAllRequest , setAllRequest] = useState();
  const [reques , setReques] = useState();
  const [roomno , setRoomno] = useState(0);




  const updateInvoiceData = async () => {
    const result = await axios.get('http://localhost:4000/getAllRequest').catch(e => console.log(e));

    console.log(result.data.request);

    setAllRequest(result.data.request);
    };






  useEffect(() => {


      updateInvoiceData();

} , [])







const submitHandler = async(e) => {
  e.preventDefault();
  console.log(e.target.id);
const nf = getAllRequest.filter(req => req._id === e.target.id);


setReques(nf[0]);





        try {

          if(roomno == 0)
          {
            alert("Please Enter Room no ")
            return;

          }

          window.location.reload();

          const io = {
            aadharCard : nf[0].aadharCard,
            panCard : nf[0].panCard,
            extraDocument: nf[0].extraDocument,
            contactNo: nf[0].ContactNo,
            endDate: nf[0].EndDate,
            startDate: nf[0].StartDate,
            propertyId:nf[0].propertyId._id,
            roomno: roomno,
            name: "Ram",
            email: "Sharma123@gmail.com",
          }

          setRoomno(0);
          const {data} =  await axios.post('http://127.0.0.1:4000/tenant/register' , io);

          const jk = {
            id: nf[0]._id,
            status: "accepted"
          }
          await axios.post('http://127.0.0.1:4000/tenant/status' , jk );








        } catch (error) {
        console.error(error)

        }







}


const rejectHandler = async(id) => {

            if(roomno !== 0)
            {
              alert("Please Enter Room no ")
              return;

            }

            const jk = {
              id: id,
              status: "rejected"
            }
            await axios.post('http://127.0.0.1:4000/tenant/status' , jk );



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


<select class="form-select form-select-sm mb-3 " aria-label=".form-select-lg example" onChange = {e => setRoomno(e.target.value)} required>
  <option selected>Open this select menu</option>
  {request.propertyId?.roomnos?.map((room) => (
    <option value={room} >{room}</option>
  ))

  }


</select>

<br/>


              <button href="#" type = "button" onClick = {() => rejectHandler(request._id)} class="p-2 m-2 btn-primary">Reject</button>
              <button href="#"  type = "submit"  class="p-2 m-2 btn-danger">Accept </button>
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
