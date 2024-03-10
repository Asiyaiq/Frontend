import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UserServices from './UserServices';
// import './App.css';


const  Registration=() =>{
  const navigate = useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  // const baseURL="http://localhost:3000/posts";
  const studentNameChangeHandler=(event)=>{

    setName(event.target.value);
  };
  const studentEmailChangeHandler=(event)=>{

    setEmail(event.target.value);
  };
  const studentPasswordChangeHandler=(event)=>{

    setPassword(event.target.value);
  };
  const submitActionHandler=(e)=>{
    e.preventDefault();

    // axios.post
    UserServices.createUserService({

      name:name,
      email:email,
      password:password,
    })
    .then(()=>{

      alert("Form"+ name +"added!");
      navigate("/login");
    })
    .catch(error=>{
      alert("error:"+error)
    });
  };
  
  return (
    <div className=" img d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

          <Form onSubmit={submitActionHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" value={name} onChange={studentNameChangeHandler} required  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={studentEmailChangeHandler} required  />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={studentPasswordChangeHandler} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <p className="mt-3">
            Continue to Login <a href="/login">Login form</a>.
            </p>
          </Form>

        </Card.Body>
      </Card>
    </div>

  );
}

export default Registration;