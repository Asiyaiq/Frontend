
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Registration from './Components/Registration';
import Login from './Components/Loginform';
import Main from './Components/Home';
import Header from './Components/Navbar';
import FrontPage from './Components/FrontPage';
import ServicePage from './Components/Services';
import Services from './Components/Services';
import Computer from './Components/Computers';
import Tablets from './Components/tablets';
import Audio from './Components/audios';
import Mobiles from './Components/mobiles';
import Drones from './Components/drones and  cameras';
import Watches from './Components/watch';
import ContactUS from './Components/contact us';
import Booking from './Components/bookingform';
import Display from './Components/table';
import Edit from './Components/editservices';



// import Drones from './Components/drones and  cameras';

function ColorSchemesExample() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={< Main />} />
          <Route exact path="/register" element={< Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/navbar" element={< Header />} />
          <Route exact path="/FrontPage" element={< FrontPage/>} />
          <Route exact path="/Services" element={<ServicePage />} />
          <Route exact path='/Services' element={<Services/>}/>
          <Route exact path="/computers" element={<Computer />} />
          <Route exact path="/tablets" element={<Tablets />} />
          <Route exact path="/drones and cameras" element={<Drones />} />
          <Route exact path="/audios" element={< Audio/>} />
          <Route exact path='/mobiles' element={<Mobiles/>}/>
          <Route exact path='/watch' element={<Watches/>}/>
          <Route exact path="/contact us" element={<ContactUS />} />
          <Route exact path="/bookingform" element={<Booking />} />
          <Route exact path="/table" element={<Display />} />
          <Route exact path="/editservices/:id" element={<Edit />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default ColorSchemesExample;