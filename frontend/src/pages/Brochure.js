import React, { useState , useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "../components/Amencomp/Image";
import { Link } from "react-router-dom";
// import './styles.css'
import axios from 'axios';
const Brochure = () => {

    const [image, setImage] = useState('')

  const [upload, setUpload] = useState(false)
  const [files , setFiles] = useState([])
  const [allFiles , setAllFiles] = useState([])
  const [propertyData , setPropertyData] = useState([])
  const [aadharCard , setAadharCard] = useState("")
  const [panCard , setPanCard] = useState("")
  const [extraDocument , setExtraDocument] = useState("")
  const [contactNo , setContactNo] = useState("")
  const [startDate , setStartDate] = useState("")
  const [endDate  , setEndDate] = useState("")
  const [propertyId  , setPropertyId] = useState("")

  useEffect(async() => {
    let result = await axios.get('http://localhost:4000/brochure')
                            .catch(e => console.log(e))
    setPropertyData(result.data);
    // setFiles(files)
    } 
    , [files]
  )

  const aadharFileHandler = async(e) => {

    // console.log(e);
    const file = e.target.files[0]
    // for(let i = 0 ; i < 3 ; i++)
    // {
    //   if(typeof e.target.files[i] !== 'undefined')
    //   {
    //     allFiles.push(e.target.files[i])
    //
    //   }
    //
    // }

    // console.log(allFiles);

    setAadharCard(e.target.files[0]);

    const formData = new FormData()
    formData.append('myFile' , file)
    console.log(formData);
    setUpload(true)

    try {
      const config = {
        headers : {
          'Content-Type': 'multipart/form-data'
        }
      }

      const {data} = await axios.post('http://127.0.0.1:4000/api/uploadFile' ,formData, config)
      console.log(data);
      setImage(data)
      setUpload(false)

    } catch (error) {
      console.error(error)
      setUpload(false)
    }
  }

  const panFileHandler = async(e) => {
    //
    // console.log(e);
    const file = e.target.files[0]
    // for(let i = 0 ; i < 3 ; i++)
    // {
    //   if(typeof e.target.files[i] !== 'undefined')
    //   {
    //     allFiles.push(e.target.files[i])
    //
    //   }
    //
    // }

    // console.log(allFiles);

    setPanCard(file);

    const formData = new FormData()
    formData.append('myFile' , file)
    console.log(formData);
    setUpload(true)

    try {
      const config = {
        headers : {
          'Content-Type': 'multipart/form-data'
        }
      }

      const {data} = await axios.post('http://127.0.0.1:4000/api/uploadFile' ,formData, config)
      console.log(data);
      setImage(data)
      setUpload(false)

    } catch (error) {
    console.error(error)
      setUpload(false)
    }

  }

  const extraFileHandler = async(e) => {
    //
    // console.log(e);
    const file = e.target.files[0]
    // for(let i = 0 ; i < 3 ; i++)
    // {
    //   if(typeof e.target.files[i] !== 'undefined')
    //   {
    //     allFiles.push(e.target.files[i])
    //
    //   }
    //
    // }

    // console.log(allFiles);

    setExtraDocument(file);
    const formData = new FormData()
    formData.append('myFile' , file)
    console.log(formData);
    setUpload(true)

    try {
      const config = {
        headers : {
          'Content-Type': 'multipart/form-data'
        }
      }

      const {data} = await axios.post('http://127.0.0.1:4000/api/uploadFile' ,formData, config)
      console.log(data);
      setImage(data)
      setUpload(false)

    } catch (error) {
      console.error(error)
      setUpload(false)
    }
  }

  const submitHandler = async(e) => {
    e.preventDefault()

    console.log(aadharCard);
    console.log(panCard);
    console.log(extraDocument);
    console.log(propertyId);
    const ol =  JSON.parse(localStorage.getItem('User'))

    try {
      const io = {
        userId: ol._id,
        aadharCard : aadharCard.name,
        panCard : panCard.name,
        extraDocument: extraDocument.name,
        contactNo: contactNo,
        endDate: endDate,
        startDate: startDate,
        propertyId: propertyId,
      }
      const {data} = await axios.post('http://127.0.0.1:4000/request' , io)

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      <Image />
<form  style = {{backgroundColor : 'white'}} onSubmit = {submitHandler}>
      <div className="container mt-5">
        <h3>Brochure </h3>

        <div className="row">
          <div className="col">
      
            <div className="table-responsive table-card mt-2">
              <table className="table table-bordered role">
                <thead className="thead-light">
                  <tr>
                    <th id="selectFloorPlan" scope="col">
                      <div className=" pl-0 checkbox">

                        <label
                          aria-hidden="true"
                          for="linkCheckAll"
                          className="m-0"
                        >
                          {" "}
                        </label>
                      </div>
                    </th>
                    <th scope="col">Floor Plan</th>
                    <th scope="col">Bed</th>
                    <th scope="col">Bath</th>
                    <th scope="col">Sq.Ft.</th>
                    <th scope="col">Rent</th>
                  </tr>
                </thead>

                <tbody>
                {  propertyData.map(property => (

                    <tr>
                      <td className="td-card-check" data-label="Landing Page"><input type="radio"  className="form-check-input" id={property._id} name="maincon" value={propertyId} onChange = {(e) => setPropertyId(property._id)} /></td>
                      <th className="td-card-name" scope="row">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          aria-label="High-Rise Studio, opens a dialog"
                          data-target="#myGalleryModal"
                          onclick="opendialog('modalbodyGallery', 'ajaxhandler?handler=gallery&amp;id=372071&amp;gallerytype=floorplan', ysi.modalCarousel.init);document.getElementById('fpname').innerHTML='High-Rise Studio';"
                        >
                          <span data-selenium-id="Floorplan1Name">
                            {property.type}
                          </span>
                        </a>
                      </th>
                      <td className="td-card-beds">
                        <p className="d-block d-lg-none td-label">Beds:</p>{" "}
                        <span data-selenium-id="Floorplan1Beds">{property.bedrooms} </span>
                      </td>
                      <td className="td-card-baths">
                        <p className="d-block d-lg-none td-label">BHK:</p>{" "}
                        <span data-selenium-id="Floorplan1Baths">{property.bhk}</span>
                      </td>
                      <td className="td-card-sqft">
                        <p className="d-block d-lg-none td-label">Sq.Ft.:</p>{" "}
                        <span data-selenium-id="Floorplan1SqFt">{property.unitSize}</span>
                      </td>
                      <td className="td-card-rent">
                        <p className="d-block d-lg-none td-label">Rent:</p>
                        <span data-selenium-id="Floorplan1Rent">Rs {property.price}</span>
                      </td>
                    </tr>

                  ))
                }
                </tbody>
              </table>
            </div>

            <div className="">
              <img src="../images/Alt.jpg" alt="" srcset="" />

              <div className="upload">
                <h1 className="upload_head">Upload DOCS</h1>

                <div>
                  <h6 className="" >Upload Aadhar Card</h6>
                  <input className="space" type="file" name="" id=""   custom onChange = {aadharFileHandler}   />
                  <h6 className="">Upload PAN card</h6>
                  <input className="space" type="file" name="" id="" custom onChange = {panFileHandler}  />
                  <h6 className="">UploadPassport </h6>
                  <input className="space" type="file" name="" id="" custom onChange = {extraFileHandler} />

                  <h6 className="">Contact </h6>
                  <input className="space"  value={contactNo} onChange = {e => setContactNo(e.target.value)} type = "text"  />

                  <h6 className="">Start date </h6>
                  <input className="space" value={startDate} onChange = {e => setStartDate(e.target.value)}  type = "date"  />
                  <h6 className="">End Date </h6>
                  <input className="space" value={endDate} onChange = {e => setEndDate(e.target.value)}  type = "date"  />
                </div>
              
                <button type="submit" class="btn-primary submit-btn">Upload</button>
              </div>

            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default Brochure;
