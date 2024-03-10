import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import UserServices from './UserServices';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const studentEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const studentPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    
    // Call the getUserService method with email and password
    UserServices.getUserService(email, password)
      .then((response) => {
        // Check if any user is found with the provided email and password
        const user = response.data[0]; // Assuming the response data is an array with one user object
        if (user) {
          navigate('/Frontpage');
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Login failed. Please try again later.");
      });
  };

  return (
    <div className="img d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form onSubmit={submitActionHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={studentEmailChangeHandler} required />
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
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
