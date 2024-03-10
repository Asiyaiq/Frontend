
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const submitActionHandler = (event) => {
        event.preventDefault();
        navigate('/register');

    }

    return (
        <div className="card-img">
            <h1>TechTrove</h1>
            <form onSubmit={submitActionHandler}>
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <Button variant="primary" className='custom-button' type="submit">Register</Button>{' '}
                    <Button variant="primary" className='custom-button'><Link to="/login">Login</Link></Button>{' '}
                </div>
            </form>
        </div >
    );
}

export default Main;
