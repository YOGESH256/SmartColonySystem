import React  , {useEffect , useState } from 'react'
// import "../styles/Request.css"
import {Button, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Request() {

  const location = useLocation();


console.log(location.state);

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
      { alert("Please Enter Room no ")
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
  };

  const rejectHandler = async(id) => {
    if(roomno !== 0)
    { alert("Please Enter Room no ")
      return;
    }

    const jk = {
      id: id,
      status: "rejected"
    }
    await axios.post('http://127.0.0.1:4000/tenant/status' , jk );
  };

  return (
    <div class="req-main">
      <h1 className="req-service mr-4">Unaccepted Tenant Requests</h1>
      {/* <div class="row row-style  ">

        { getAllRequest && getAllRequest.map(request => (
          <form  className = ""  onSubmit={submitHandler} id={request._id}>
            <div class="col-sm-10 m-auto ">
              <div class="card">

                <div class="card-body text-center">
                  <h5 class="card-title">{request.user.username}</h5>
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
                    ))}
                  </select>
                  <br/>

                  <button href="#" type = "button" onClick = {() => rejectHandler(request._id)} class="p-2 m-2 btn-primary">Reject</button>
                  <button href="#"  type = "submit"  class="p-2 m-2 btn-danger">Accept </button>
                </div>

              </div>
            </div>
          </form>
        ))}

      </div> */}
      <div className='map-team-cards'>
      { getAllRequest && getAllRequest.map(req => (
          <form onSubmit={submitHandler} id={req._id}
            md={4} sm={6} xs={12}
            className="mb-5 tenant-card"
            border="light"
            style={{ width: "18rem" }}>
            <h1>{req.user.username}</h1>
            <Card.Header>
              <h2 style={{ marginBottom: "0px" }}>{req.property.type}</h2>
              <br />
              <h3 style={{ marginBottom: "8px" }}>
                {req.property.bhk}<small className="text-muted">bhk</small>&nbsp;
                &#8377;{req.property.unitSize}<small className="text-muted">/mo</small>
                &nbsp;{req.property.price}<small className="text-muted">sq.</small>
              </h3>
            </Card.Header>

            <Card.Body>
              <p><a href={`http://localhost:4000/files/${req.aadharCard}`} class="">AadharCard</a></p>
              <p><a href={`http://localhost:4000/files/${req.panCard}`} class="">Pancard</a></p>
              <p><a href={`http://localhost:4000/files/${req.extraDocument}`} class="">extraDocument</a></p>
            </Card.Body>

            <select class="form-select form-select-sm mb-3 " aria-label=".form-select-lg example" onChange = {e => setRoomno(e.target.value)} required>
              <option selected>Open this select menu</option>
              {req.property?.roomnos?.map((room) => (
                <option value={room} >{room}</option>
              ))}
            </select>

            <div style={{display: "flex", justifyContent: "space-evenly",padding: "5px"}} >
              <Button className="btn-primary" onClick = {() => rejectHandler(req._id)} block size="md" type="submit" >
                Reject
              </Button>
              <Button className="btn-danger" block size="md" type="submit" >
                Accept
              </Button>
            </div>
          </form>
      ))}
      </div>

    </div>
    )
}
