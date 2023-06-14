import React from 'react'
import '../Styles/destinations.css'
import {Container, Row,Col} from 'react-bootstrap'
import DestinationCards from '../Shared/destinationCard/DestinationCards'
import destinationdata from '../assets/data/destinations'


function Destinations() {
  window.scrollTo(0,0);
  return (
    <div>
          <section className='common_sections'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>DESTINATONS</h1>
                </Col>
            </Row>
        </Container>
    </section>

    <section >
      <Container>
      <Row>{destinationdata?.map(destination=>(
            <Col lg='4' key={destination.id} data-aos="fade-up"
            data-aos-duration='2000'>
                <DestinationCards destination={destination}/>
            </Col>
        ))}</Row>
    </Container>
    </section>


    </div>
  )
}

export default Destinations