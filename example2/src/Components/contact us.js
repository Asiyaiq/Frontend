
import Card from 'react-bootstrap/Card';

import Header from './Navbar';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
function ContactUS() {
    return (
        <div>
        <Header />
        <Card>
            <div style={{ display: "flex", backgroundColor: "pink", alignItems: "center", justifyContent: "center" }}>
                <Card.Body style={{ alignItems: "center", marginLeft: "100px" }}>
                    <Card.Title ><h2 >Get In Touch</h2></Card.Title>
                    <Card.Text>
                        Want to get in touch?We'd love to hear from you.Here's how <br></br>you can reach us...
                    </Card.Text>
                </Card.Body>

                <div style={{ overflow: 'hidden', borderRadius: '30% 10% 10% 30% / 50% 0 0 50%' }}>
                    <Card.Img variant="top" style={{ height: "400px", width: "600px", backgroundColor: "black" }} src="images/c1.jpeg" />
                </div>
            </div>
            <div style={{ display: "flex",justifyContent:"space-evenly" }}>
                <Card style={{ width: '20rem', height: "19rem", bottom: "60px" }}>

                    <Card.Body>

                        <Card.Title><FaPhone style={{ marginLeft: "70px", color: "blue", fontSize: "50px", dispaly: "flex" }} /> <FaEnvelope style={{ color: "red", fontSize: "50px", marginRight: "20px" }} /></Card.Title>
                        <div style={{ marginLeft: "70px", fontSize: "20px", marginBottom: "20px" }} >
                            <b className='ws-5'>Talk to sales</b><br></br>
                            <b>987654321</b><br></br>
                            <b>techtrove@gmail.com</b>

                        </div>
                        <Card.Text>
                            Interested in buying TechTrove products..?just pick up the phone to chat with a member of our sales team
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', height: "19rem", bottom: "60px" }}>

                    <Card.Body>

                        <Card.Title>  <FaMapMarkerAlt style={{ color: "red", fontSize: "50px", marginLeft: "100px" }} /> </Card.Title>
                        <div style={{ marginLeft: "70px", fontSize: "20px", marginBottom: "20px" }} >
                            <b className='ws-5'>Talk to sales</b><br></br>
                            <b>987654321</b>

                        </div>
                        <Card.Text>
                            Interested in buying TechTrove products..?just pick up the phone to chat with a member of our sales team
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', height: "19rem", bottom: "60px"}}>

                    <Card.Body>
                    <Card.Text style={{marginBottom:'50px'}}>
                        <h3>Follow Us On...</h3>
                    </Card.Text>
                      <p>Want to know more aboute tech trove follow us on below social medias</p>
                        <Card.Title>   <FaInstagram style={{ color: "magenta", fontSize: "50px", marginRight: "20px" }} />
                            <FaFacebook style={{ color: "blue", fontSize: "50px", marginRight: "20px" }} />
                            <FaTwitter style={{ color: "", fontSize: "50px", marginRight: "20px" }} />
                            <FaPaperPlane style={{ color: '#0088cc', fontSize: '50px',marginRight: "20px" }} /></Card.Title>
                       
                        
                    </Card.Body>
                </Card>
            </div>
        </Card>
        </div>
    );
}

export default ContactUS;