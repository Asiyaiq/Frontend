
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStarFill, BsStar } from 'react-icons/bs';

function Drones() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/d1.jpeg" height={200} width={200} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>EXE Mini Drone With Sky Controller</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 3,499<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    
                                    &nbsp;30reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/d3.jpeg" height={200} width={200} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Pantony 180 20.0 Megapixel Digital Camera</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 10,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;300reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/d2.jpeg" height={200} width={200} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>HKI Tech Quadcopter Drone With 360 Camera & Controller</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 20,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;200+reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/d6.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Pantony DSLR Old School Camera With 18-55mm Lens</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 25,999<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;102+reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/d4.jpeg" height={200} width={200} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Wave Mini 4 Quadcopter With Remote Controller</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 50,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;3200reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/d5.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Best DSLR Cameras</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 80,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;200reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>

        </div>
    );


} export default Drones;