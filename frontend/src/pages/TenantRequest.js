import React  , {useEffect , useState } from 'react'
import "../styles/Request.css"
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

console.log(nf[0]);
setReques(nf[0]);





        try {

          if(roomno == 0)
          {
            alert("Please Enter Room no ")
            return;

          }




          const io = {
            aadharCard : nf[0].aadharCard,
            panCard : nf[0].panCard,
            extraDocument: nf[0].extraDocument,
            contactNo: nf[0].ContactNo,
            endDate: nf[0].EndDate,
            startDate: nf[0].StartDate,
            propertyId:nf[0].property._id,
            roomno: roomno,
            name: nf[0].user.username,
            email: nf[0].user.email,
            userId: nf[0].user._id,
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




window.location.reload();


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
          <h1 className="req-service mr-4">Unaccepted Services</h1>


        <div class="row row-style  ">

      { getAllRequest && getAllRequest.map(request => (

<form  className = ""  onSubmit = {submitHandler} id = {request._id}>
        <div class="col-sm-10 m-auto ">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">{request.user.username}</h5>
              <p class="card-text">{request.property.type}</p>
              <p class="card-text">{request.property.type}</p>
              <p class="card-text"> Rs {request.property.price}</p>
              <p class="card-text">{request.property.unitSize}</p>
              <p class="card-text">{request.property.bhk}</p>
              <p><a href={`http://localhost:4000/files/${request.aadharCard}`} class="">AadharCard</a></p>
              <p><a href={`http://localhost:4000/files/${request.panCard}`} class="">Pancard</a></p>
              <p><a href={`http://localhost:4000/files/${request.extraDocument}`} class="">extraDocument</a></p>


                <select class="form-select form-select-sm mb-3 " aria-label=".form-select-lg example" onChange = {e => setRoomno(e.target.value)} required>
                  <option selected>Open this select menu</option>
                  {request.property?.roomnos?.map((room) => (
                    <option value={room} >{room}</option>
                  ))

                  }


                </select>

<br/>


              <button href="#" type = "button" onClick = {() => rejectHandler(request._id)} class="p-2 m-2 btn-primary">Reject</button>
              <button href="#"  type = "submit"  class="p-2 m-2 btn-danger">Accept </button>
            {  /* <a href="#" class="req-rej-btn btn-primary">Give Timing</a> */}
            </div>
          </div>
        </div>

        </form>

      ))}








</div>

        </div>
    )
}
