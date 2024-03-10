import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStarFill, BsStar } from 'react-icons/bs';
function Audio() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/a1.jpeg" style={{ height: "450px", width: "200px", marginLeft: "50px" }} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Balo Headphones 700 Wireless Noise Cancelling</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 5,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;120reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/a2.jpeg"style={{ height: "400px", width: "200px", marginLeft: "50px" }} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>MX50 Wired Earbud Headphones</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 1,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;40reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/a3.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Certified Pantony Buds Wireless Earbud Headphones</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 2,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;190reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/a4.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Turn5 Portable Bluetooth Speaker With Handle</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 3,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;320reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/a5.jpeg" height={200} width={200} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title> GAMING SPEAKER RGB BLASTER 10 W Gaming Speaker  (Black)</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 7,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;440reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                        </Card.Body>
                    </Card></Col>
                    <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                        <Card.Img variant="top" src="images/a6.jpeg" style={{ height: "450px", width: "250px", marginLeft: "50px" }} />
                        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Sale</h3></div>
                        <Card.Body>
                            <Card.Title>Drums Pro Wireless On-Ear Headphones</Card.Title>
                            <Card.Text style={{ color: "" }}>
                                &#8377; 6,000<br></br>
                                <div >
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    <BsStarFill style={{ color: "gold" }} />
                                    &nbsp;280reviews
                                </div>
                            </Card.Text>
                            <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>

        </div>
    );


} export default Audio;