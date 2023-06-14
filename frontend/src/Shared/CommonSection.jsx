import React from 'react'
import '../Shared/CommonSection.css'

import {Container, Row,Col} from 'react-bootstrap'

const CommonSection = ({title}) => {
  return (
    <section className='common-sec'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection