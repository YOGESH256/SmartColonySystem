import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const FormAdmin = () => {
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bhk, setBhk] = useState(0);
  const [unitSize, setUnitSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [tourlink, setTourLink] = useState("");
  // const [quantity , setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const [max, setMax] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
    const op = {
      type,
      bedrooms,
      bhk,
      unitSize,
      price,
      tourlink,
      max,
      image,
    };

    await axios.post("http://localhost:4000/property/add", op);
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Bedrooms </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>BHK </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={bhk}
              onChange={(e) => setBhk(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>unitSize </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter email"
              value={unitSize}
              onChange={(e) => setUnitSize(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rent price </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter email"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>tourlink </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={tourlink}
              onChange={(e) => setTourLink(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>

          {/*<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>quantity </Form.Label>
<Form.Control type="number" placeholder="Enter email" value = {quantity}  onChange = {(e) => setQuantity(e.target.value)}/>
</Form.Group>*/}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Max </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter email"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormAdmin;
