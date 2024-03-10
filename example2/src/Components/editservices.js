
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Services from './pageservices';
function Edit() {
    const [name, setname] = useState('');
    const [productname, setproductname] = useState('');
    const [price, setprice] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [zipcode, setzipcode] = useState('');


    const { id } = useParams();

    //    const baseURL = "http://localhost:3000/Form";
    // const SERVICE_API_BASE_URL = "http://localhost:8080/api/v1/Services";

    const navigate = useNavigate();
    const fetchDetails = () => {

        //fetching the froms details data based on the id when the components mounts

        Services.getServiceById(id)
            .then(response => {

                const servicedata = response.data;
                setname(servicedata.name);
                setproductname(servicedata.productname);
                setprice(servicedata.price);
                setaddress(servicedata.address);
                setemail(servicedata.email);
                setphonenumber(servicedata.phonenumber);
                setzipcode(servicedata.zipcode);
            })
            .catch(error => {

                console.error("Error fetching service data", error);
            });
    }
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
        Services. editService(id, {
            name: name,
            productname: productname,
            price: price,
            address: address,
            email: email,
            phonenumber: phonenumber,
            zipcode: zipcode

        })
            .then(() => {

                alert("service:" + name + "updated!");
                navigate("/bookingform");
            })
            .catch(error => {
                alert("error updating services"+error)
            });
    }
    useEffect(() => {
        if (id)
            fetchDetails(id);
    }, [id]);


    return (

        <div className=" img d-flex justify-content-center align-items-center vh-100">

            <Card style={{ width: '35rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Form onSubmit={submitActionHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Password" value={name} onChange={nameChangeHandler} required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2" col-6>
                                Product Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="product name " value={productname} onChange={productnameChangeHandler} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Price
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Price" value={price} onChange={priceChangeHandler} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="address" value={address} onChange={addressChangeHandler} required />
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
                                <Form.Control placeholder="phone number" value={phonenumber} onChange={phonenumberChangeHandler} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                zip code
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="zip code" value={zipcode} onChange={zipcodeChangeHandler} required />
                            </Col>
                        </Form.Group>
                        <Button type='submit'>submit</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>

    );
} export default Edit;