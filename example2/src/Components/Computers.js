
import Button from 'react-bootstrap/Button';
import Header from './Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Computer() {
    return (
        <div style={{ backgroundColor: "pink" }}>
            <Header />
            <Container >
                <div>
                    <Row>
                        <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/home1.jpeg" height={200} width={200} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>Pilates 14" Touch Screen Laptop 12GB Memory</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 50,000<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        &nbsp;240reviews
                                    </div>
                                </Card.Text>
                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>


                            </Card.Body>
                        </Card></Col>

                        <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/sc1.jpeg" height={200} width={200} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>MSP 14" Laptop 16GB Memory, Carbon Gray</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 80,000<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        &nbsp;2,130reviews
                                    </div>
                                </Card.Text>
                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                            </Card.Body>
                        </Card></Col>
                        <Col><Card  className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/SC2.avif" height={200} width={200} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>iPilates 16" Touch Screen Laptop 12GB Memory</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 60,000<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        &nbsp;3,130reviews
                                    </div>
                                </Card.Text>
                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                            </Card.Body>
                        </Card></Col>
                    </Row>
                    <Row>
                        <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/SC3.jpeg" height={200} width={200} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>HP Gaming Laptop 15.6" Laptop 256GB</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 91  ,999<br></br>
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

                        <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/sc4.jpeg" height={200} width={200} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>Pilates 16" Touch Screen Laptop 24GB Memory</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 40,000<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />

                                        &nbsp;130reviews
                                    </div>
                                </Card.Text>
                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>

                            </Card.Body>
                        </Card></Col>
                        <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/sc5.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>Corr Desktop 24GB Memory + 29" Screen Keyboard & Mouse</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 1,60,000<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        &nbsp;1231reviews
                                    </div>
                                </Card.Text>

                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>


                            </Card.Body>
                        </Card></Col>
                    </Row>
                    <Row>
                        <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/sc6.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>Intel® Core-i9 Processor, 8GB, 1TB HDD, 21.5" Full HD LED Monitor, Windows 10 Home.</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377;  132,999.00<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }}
                                         /> <BsStarFill style={{ color: "gold" }} />
                                        &nbsp;240reviews
                                    </div>
                                </Card.Text>
                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                            </Card.Body>
                        </Card></Col>

                        <Col><Card className='zoom-in' style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/sc7.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>HP All-in-One PC Intel Pentium J5040  FHD Three-Sided Micro-Edge Display(8GB RAM/512GB)</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 2,50,,000<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        &nbsp;1,130reviews
                                    </div>
                                </Card.Text>
                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                            </Card.Body>
                        </Card></Col>
                        <Col><Card  className='zoom-in'style={{ width: '22rem', height: '28rem', marginTop: "90px" }}>
                            <Card.Img variant="top" src="images/sc8.jpeg" style={{ height: "500px", width: "250px", marginLeft: "50px" }} />
                            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'red', width: '70px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3 style={{ margin: 0 }}>Sale</h3></div>
                            <Card.Body>
                                <Card.Title>Core i5 Desktop     Intel Core i5 2nd Generation, 8GB RAM - 256GB SSD</Card.Title>
                                <Card.Text style={{ color: "" }}>
                                    &#8377; 20,990<br></br>
                                    <div >
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        <BsStarFill style={{ color: "gold" }} />
                                        &nbsp;1200reviews
                                    </div>
                                </Card.Text>
                                <Button variant='outline-Light' style={{ backgroundColor: "red", marginRight: "20px" }}><Link to="/bookingform" style={{ textDecoration: 'none', color: 'black' }}>Buy Now</Link></Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </div>
            </Container>


        </div>
    );

} export default Computer;