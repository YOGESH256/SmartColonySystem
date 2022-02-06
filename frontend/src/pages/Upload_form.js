import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import "../styles/Upload_Form.css";
import Testimonial from "../components/Testimonial";
import { Reviews } from "../Utils/Reviews";
import axios from "axios";

export default function Upload_Form() {
  const [image, setImage] = useState("");

  const [upload, setUpload] = useState(false);
  const [files, setFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);

  useEffect(async () => {
    //   let result = await axios.get('http://127.0.0.1:4000/api/getFiles').catch(e => console.log(e))
    //
    //
    // let files = result.data.files;
    //
    // console.log(files);
    //
    // setFiles(files)
  }, [files]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    for (let i = 0; i < 3; i++) {
      if (typeof e.target.files[i] !== "undefined") {
        allFiles.push(e.target.files[i]);
      }
    }

    console.log(allFiles);

    const formData = new FormData();
    formData.append("myFile", file);
    console.log(formData);
    setUpload(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://127.0.0.1:4000/api/uploadFile",
        formData,
        config
      );
      console.log(data);
      setImage(data);
      setUpload(false);
    } catch (error) {
      console.error(error);
      setUpload(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(e);
    console.log(e.target.files);
  };

  return (
    <div id="upld-main">
      <img src="../images/Alt.jpg" alt="" srcset="" />
      <Col className="upld-box">
        <h1 className="up_head_title">Document Upload Form</h1>
        <hr />
        <Col className="upld-content">
        <div class="btn-group">
          <button type="button" class=" btn-danger">
            Action
          </button>
          <button
            type="button"
            class=" btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="up_doc_name">Upload Aadhar Card</h6>
          <input
            type="file"
            name=""
            id=""
            custom
            onChange={uploadFileHandler}
          />
          <h6 className="up_doc_name">Upload PAN card</h6>
          <input
            type="file"
            name=""
            id=""
            custom
            onChange={uploadFileHandler}
          />
          <h6 className="up_doc_name">UploadPassport </h6>
          <input
            type="file"
            name=""
            id=""
            custom
            onChange={uploadFileHandler}
          />
        </div>

        <button type="button" class="btn-primary up_submit_btn">
          Send Now!
        </button>
        </Col>

      </Col>
      <div className="R_home_testimonial">
        <div className="R_home_review">
          <div className="R_home_comments">
            <Testimonial slides={Reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
