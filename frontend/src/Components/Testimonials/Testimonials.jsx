import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './testimonials.css'

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-04.jpg'



function Testimonials() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className='d-flex gap-4 mt-3 justify-content-between cardtest' data-aos="fade-up"
     data-aos-duration='2000'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ava01} />
      <Card.Body className='align-items-center' >
        <Card.Title>Alenia</Card.Title>
        <h6>Client</h6>
        <Card.Text className='CardiText'>
        I had an amazing experience booking my recent vacation through this tour booking website. The website was incredibly user-friendly, and I found a wide range of tour options for my destination. The prices were competitive, and I even scored a great deal on a guided tour. The booking process was smooth, and I received instant confirmation.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ava02} />
      <Card.Body>
      <Card.Title>Jhon wick</Card.Title>
        <h6>Client</h6>
        <Card.Text className='CardiText'>
          I've used this tour booking website multiple times, and each time it has exceeded my expectations. The website is easy to navigate, and I appreciate the detailed information provided for each tour, including reviews from other travelers. The customer service is outstanding; they were quick to respond to my inquiries and helped me choose the perfect tour for my family. The tour guide was knowledgeable and friendly, making our trip memorable and enjoyable. I will continue using this website for all my future travel plans.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ava03} />
      <Card.Body>
      <Card.Title>Tony</Card.Title>
        <h6>Client</h6>
        <Card.Text className='CardiText'>
        The tour booking website had a good selection of tours, and I was able to find something suitable for my budget. The booking process was straightforward, but I did encounter a minor issue with the payment page, which was a bit frustrating. Luckily, customer service was helpful and resolved the problem quickly. The tour itself was decent, but it didn't fully match the description on the website. 
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ava04} />
      <Card.Body>
      <Card.Title>Alexandra</Card.Title>
        <h6>Client</h6>
        <Card.Text className='CardiText'>
        I had an amazing experience using deegayutours.lk for booking my recent trip to Sri lanka. The website was super easy to navigate, and I found the perfect tour within minutes. The options were diverse, and the tour descriptions were detailed, so I knew exactly what to expect. Customer service was top-notch too. When I had a question about the itinerary, their support team responded promptly and resolved my query. I highly recommend deegayutours.lk for hassle-free and memorable travel experiences!
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
  );
};

export default Testimonials