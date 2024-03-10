import Button from 'react-bootstrap/Button';
import Header from './Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Watches() {
    return (
        <div style={{backgroundColor:"pink"}}>
            <Header />
            <Container>
                <Row>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/w1.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Space Moon Smartwatch With Charger</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 10,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />    
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;102reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>


                        </Card.Body>
                    </Card></Col>

                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/w2.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}}/>
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Fitboot Inspire Fitness Tracker With Heart Rate Tracking</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 12,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;1202reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/w3.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Pantony 6P Activity Tracker</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377;5,999<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;322reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>


                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row>
                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/w4.jpg"style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>FitWatch Fitness Smart Watch</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 15,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;690reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>



                        </Card.Body>
                    </Card></Col>

                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/w5.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>FitWatch XDH Fitness Smart Watch</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 7,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;330reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>



                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/w6.jpg"  style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>HV Virtual Reality System for PC</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 10,999<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;2,130reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>



                        </Card.Body>
                    </Card></Col>
                </Row>
                
                
            </Container>


        </div>
    );

} export default Watches;