import Button from 'react-bootstrap/Button';

import Header from './Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Mobiles() {
    return (
        <div style={{backgroundColor:"pink"}}>
            <Header />
            <Container>
                <Row>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/m1.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>vivo T2 5G (Velocity Wave, 128 GB)  (6 GB RAM)</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 30,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />    
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;1230reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                            

                        </Card.Body>
                    </Card></Col>

                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/m4.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}}/>
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Shel 50" Class LED 4K UHD Smart TV</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 35,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;342reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/m2.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Go XPD Protector 5G, 16GB</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 20,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;130reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/m5.jpg"style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>42" Class Full HD Smart Streamer TV</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 60,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;2400reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>

                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/m3.jpg" style={{height:"500px",width:"250px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>OVE Light Space 5G, 128GB</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 25,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;522reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/m6.jpg"  style={{height:"500px",width:"230px", marginLeft:"50px"}} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Shel 40" Class LED Full HD Smart TV</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 80,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;2550reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                </Row>
                
                
            </Container>


        </div>
    );

} export default Mobiles;