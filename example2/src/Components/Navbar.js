import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { InputGroup, FormControl } from 'react-bootstrap';
// import { FaShoppingCart } from 'react-icons/fa'; 

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
   
          <Nav className="me-auto">
            <Nav.Link href="FrontPage">HomePage</Nav.Link>
            <NavDropdown title="Services">
              <NavDropdown.Item href="Computers">Computers</NavDropdown.Item>
              <NavDropdown.Item href="tablets">Tablet</NavDropdown.Item>
              <NavDropdown.Item href="drones and cameras">Drones and Cameras</NavDropdown.Item>
              <NavDropdown.Item href="audios">Audios</NavDropdown.Item>
              <NavDropdown.Item href="mobiles">Mobiles&T.V's</NavDropdown.Item>
              <NavDropdown.Item href="watch">Wearable Tech</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact us">Contact Us</Nav.Link>
            <Nav.Link href="bookingform">Booking Form</Nav.Link>
            <Nav.Link href="table">Table</Nav.Link>
           
          </Nav>
          {/* <div className=" d-flex justify-content-end">
            <InputGroup.Text><FaShoppingCart /></InputGroup.Text> 
          </div> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
  