import React, { useState , useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "../components/Amencomp/Image";
import AmenInside from "../components/Amencomp/AmenInside";
import AmenInside2 from "../components/Amencomp/AmenInside2";
import { Link } from "react-router-dom";
// import './styles.css'
import axios from 'axios';
const AdminValidation = () => {

    const [image, setImage] = useState('')

  const [upload, setUpload] = useState(false)
  const [files , setFiles] = useState([])
  const [allFiles , setAllFiles] = useState([])
  const [propertyData , setPropertyData] = useState([])
  const [aadharCard , setAadharCard] = useState("")
  const [panCard , setPanCard] = useState("")
  const [extraDocument , setExtraDocument] = useState("")
  const [contactNo , setContactNo] = useState("")
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const [services  , setServices] = useState("")

  const [description  , setDescription] = useState("")





    useEffect(async() => {






          // setFiles(files)

    } , [files])





    const aadharFileHandler = async(e) => {

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


        try {

          const io = {
            aadharCard : aadharCard.name,
            panCard : panCard.name,
            extraDocument: extraDocument.name,
            contactNo: contactNo,
            description: description,
            services: services,
            username: username,
            email: email,
            password: password

          }

          console.log(io);
          await axios.post("http://localhost:4000/workerregister" , io ).then((res) => console.log(res)).catch(e => console.log(e.message));


          // const {data} = await axios.post('http://127.0.0.1:4000/request' , io)


        } catch (error) {
        console.error(error)

        }








      }

  return (
    <>

<form  style = {{backgroundColor : 'white'}} onSubmit = {submitHandler}>
      <div className="container mt-5">
        <h3>Worker Validation </h3>


        <div className="row">
          <div className="col">
            <div className="table-responsive table-card mt-2">

            </div>

            <div className="">

  <img src="../images/Alt.jpg" alt="" srcset="" />
                <div className="upload">
            <h1 className="upload_head">Upload DOCS :- </h1>




                <div>
                <h6 className="h1">Name </h6>
                <input  value = {username} onChange = {e => setUsername(e.target.value)} type = "text"  />
                <h6 className="h1">email </h6>
                <input  value = {email} onChange = {e => setEmail(e.target.value)} type = "text"  />
                <h6 className="h1">password </h6>
                <input  value = {password} onChange = {e => setPassword(e.target.value)} type = "text"  />



                <h6 className="h1" >Upload Aadhar Card</h6>
                <input type="file" name="" id=""   custom onChange = {aadharFileHandler}   />
                <h6 className="h1">Upload PAN card</h6>
                <input type="file" name="" id="" custom onChange = {panFileHandler}  />
                <h6 className="h1">UploadPassport </h6>
                <input type="file" name="" id="" custom onChange = {extraFileHandler} />



                <h6 className="h1">Contact </h6>
                <input  value = {contactNo} onChange = {e => setContactNo(e.target.value)} type = "text"  />

                <h6 className="h1">Services </h6>
                <select class="form-select form-select-sm mb-3 " aria-label=".form-select-lg example" onChange = {e => setServices(e.target.value)} required>
                  <option selected>Open this select menu</option>
                  <option value = "Air Conditioning" >Air Conditioning</option>
                  <option value = "Cleaning" >Cleaning</option>
                  <option value = "Carpentry" >Carpentry</option>
                  <option value = "TV and Electronics" >TV and Electronics</option>
                  <option value = "Plumbing" >Plumbing</option>
                  <option value = "Electrical" >Electrical</option>
                  <option value = "Painting" >Painting</option>
                  <option  value = "Moving">Moving</option>


                </select>
                <h6 className="h1">Description </h6>
                <input  value = {description} onChange = {e => setDescription(e.target.value)} type = "text"  />



                </div>
 <br />
               <button type="submit" class="btn-primary submit-btn">submit</button>

                </div>



            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default AdminValidation;
