
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import Header from './Navbar';
import { useNavigate } from 'react-router-dom';
import Services from './pageservices';

function Display() {
  const [customer, setcustomer] = useState([]);
  const navigate = useNavigate();
  // const baseURL = "http://localhost:3000";
  // const navigate = useNavigate();

  const setcustomerData = () => {
    // axios.get(baseURL + "/Form")
    Services.getService()
      .then((response) => {
        setcustomer(response.data);
      }).catch(error => {
        alert("Error occurred while loading data: " + error);
      });
  }

  useEffect(() => {
    setcustomerData();
  }, []);

  const removecustomer = (id) => {
    // axios.delete(baseURL + "/Form/" + id)
    Services.deleteService(id)
      .then((response) => {
        alert("Student deleted");
        setcustomerData();
      }).catch(error => {
        alert("Error: " + error);
      });
  }

  // const openEditForm = (customer) => {
  //   setEditedStudent(customer);
  //   setShowEditForm(true);
  //   navigate("/frontpage"); // Navigate to the Student component
  // }
  //   const handleUpdate = () => {
  // Perform the update using the editedStudent data
  //   axios.put(baseURL + "/Form/" )
  //     .then((response) => {
  //       alert("Student updated");
  //       setcustomerData();
  //     //   setShowEditForm(false);
  //     }).catch(error => {
  //       alert("Error updating student: " + error);
  //     });
  // }

  // const handleEditFormClose = () => {
  //   setShowEditForm(false);
  // }

  return (
    <div>
      <Header />
   
      < div className='mt-5' >

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>productname</th>
            <th>price</th>
            <th>address</th>
            <th>email</th>
            <th>phonenumber</th>
            <th>zipcode</th>
          </tr>
        </thead>
        {/* ... Header ... */}
        <tbody>
          {customer && customer.map((customers, index) => (
            <tr key={index}>
              <td>{customers.id}</td>
              <td>{customers.name}</td>
              <td>{customers.productname}</td>
              <td>{customers.price}</td>
              <td>{customers.address}</td>
              <td>{customers.email}</td>
              <td>{customers.phonenumber}</td>
              <td>{customers.zipcode}</td>

              <td>
                <FaEdit onClick={() => navigate('/editservices/' + customers.id)} /> |
                <button onClick={() => removecustomer(customers.id)} className="button">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

           

        </div >
        </div>
  );

} export default Display;