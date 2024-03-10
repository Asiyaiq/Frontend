// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'react-bootstrap/Carousel';
// import Header from './Navbar';


// function FrontPage() {
//   return (
//     <div >
//       <Header />
//       <Carousel>
//         <Carousel.Item>
//           <ExampleCarouselImage text="First slide" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <ExampleCarouselImage text="Second slide" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <ExampleCarouselImage text="Third slide" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>




//     </div>
//   );
// }

// export default FrontPage;
//  FrontPage.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Header from './Navbar';
import Button from 'react-bootstrap/esm/Button';

function FrontPage() {
  return (
    <div >

      <Header />
      <div className='pics' style={{ marginTop: '56px',background: 'rgba(0, 0, 0, 10)', backdropFilter: 'blur(1000px)' }}>
        <Carousel fade style={{ height: "calc(100vh - 56px)" }} interval={200} controls={false} >

          <Carousel.Item className='text-primary'>
            <img src='images/home1.jpeg' alt='First slide'  />
            <Carousel.Caption className='text-right caption'>
              <h1  >Incridble prices <br></br> on All Your <br></br>Favorite Items </h1>
              <p >Get more for less on selected brands </p>
              <Button className='rounded-pill'>Shope Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='images/home2.jpeg' alt='Second slide' className='d-block w-100' />
            <Carousel.Caption className='caption'>
              <h1 >Incridble prices <br></br> on All Your <br></br>Favorite Items </h1>
              <p >Get more for less on selected brands </p>
              <Button className='rounded-pill'>Shope Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='images/home4.jpeg' alt='Third slide' className='d-block w-100' />
            <Carousel.Caption className='caption'>
              <h1  >Incridble prices <br></br> on All Your <br></br>Favorite Items </h1>
              <p >Get more for less on selected brands </p>
              <Button className='rounded-pill'>Shope Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  );
}

export default FrontPage;
