import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './testimonials.css'

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


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
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ava02} />
      <Card.Body>
      <Card.Title>Jhon wick</Card.Title>
        <h6>Client</h6>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ava03} />
      <Card.Body>
      <Card.Title>Jhon wick</Card.Title>
        <h6>Client</h6>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ava01} />
      <Card.Body>
      <Card.Title>Jhon wick</Card.Title>
        <h6>Client</h6>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
  );
};

export default Testimonials