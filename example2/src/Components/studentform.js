
import { Form, Button, Container, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Student() {
  
  const [studentName, setstudentName] = useState('');
  const [studentRole, setstudentRole] = useState('');

  const baseURL = "http://localhost:3000/posts";

  const navigate = useNavigate();

  const studentNameChangeHandler = (event) => {
     
      setstudentName(event.target.value);
      console.log(event.target.value);
    };

    const studentRoleChangeHandler = (event) => {
       setstudentRole(event.target.value);
      console.log(event.target.value);
    };

    const submitActionHandler = (event) => {
      event.preventDefault();
  
      //  console.log("clicked")

       axios.post(baseURL, {
          name: studentName,
          role: studentRole
        })
          .then((response) => {
            alert("Student " + studentName + " added!");
            navigate("/");
          }).catch(error => {
            alert("error===" + error);
          });
    };
  return (
    <Alert variant='primary'>
      <Container>

        <Form onSubmit={submitActionHandler}>
          <Form.Group className="mb-3" controlId="form.Name">
            <Form.Label>Student Name </Form.Label>
            <Form.Control type="text" placeholder="Enter Name " value={studentName} onChange={studentNameChangeHandler} required />

          </Form.Group>

          <Form.Group className="mb-3" controlId="form.Role">
            <Form.Label>Student Role</Form.Label>
            <Form.Control type="text" placeholder="Enter Role" value={studentRole} onChange={studentRoleChangeHandler} required />
          </Form.Group>
          <br></br>
          <Button type='submit'>Add Student</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type='button'>Cancel</Button>
        </Form>
      </Container>
    </Alert>

  )
}
export default Student;