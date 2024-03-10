
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Header from './Navbar';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Services from './pageservices';


function Booking() {
  const [name, setname] = useState('');
  const [productname, setproductname] = useState('');
  const [price, setprice] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [zipcode, setzipcode] = useState('');
  const navigate = useNavigate();

  // const baseURL = "http://localhost:3000/Form";

  const nameChangeHandler = (event) => {
    setname(event.target.value);
    ;
  };
  const productnameChangeHandler = (event) => {
    setproductname(event.target.value);

  };

  const priceChangeHandler = (event) => {
    setprice(event.target.value);

  };
  const addressChangeHandler = (event) => {
    setaddress(event.target.value);

  };
  const emailChangeHandler = (event) => {
    setemail(event.target.value);

  };
  const phonenumberChangeHandler = (event) => {
    setphonenumber(event.target.value);

  };
  const zipcodeChangeHandler = (event) => {
    setzipcode(event.target.value);

  };


  const submitActionHandler = (event) => {
    event.preventDefault();

    //  console.log("clicked")

    // axios.post(baseURL, {
    //   name: name,
    //   productname: productname,
    //   price: price,
    //   address: address,
    //   email: email,
    //   phonenumber: phonenumber,
    //   zipcode: zipcode
    // })
    Services.createService({
      name: name,
      productname: productname,
      price: price,
      address: address,
      email: email,
      phonenumber: phonenumber,
      zipcode: zipcode 
    })
      .then((response) => {
        alert("product " + name + " added!");
        navigate("/table");
      }).catch(error => {
        alert("error===" + error);
      });
  };

  return (

    <div className=" img d-flex justify-content-center align-items-center vh-100">
      <Header />
      <Card style={{ width: '35rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Form onSubmit={submitActionHandler}>
            <Form.Group as={Row} className="mb-3"  controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="Password" type="name" value={name} onChange={nameChangeHandler} required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="2" col-6>
                Product Name
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="product name "  type="name"  value={productname} onChange={productnameChangeHandler} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="Price"  type="text"value={price} onChange={priceChangeHandler} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="address" type='text' value={address} onChange={addressChangeHandler} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="email" value={email} onChange={emailChangeHandler} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Phone Number
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="phone number" type='tel' value={phonenumber} onChange={phonenumberChangeHandler} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                zip code
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="zip code" type='text' value={zipcode} onChange={zipcodeChangeHandler} required />
              </Col>
            </Form.Group>
            <Button type='submit'>submit</Button>
          </Form>
        </Card.Body>
      </Card>

    </div>
  );

} export default Booking;