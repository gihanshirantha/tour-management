import React from 'react'
import './NewsLetter.css';

import {Container, Row, Col} from 'react-bootstrap'
import Tourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section className='newsLetter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsLetter_content">
                        <h2>Subscribe no to get useful traveling information.</h2>

                        <div className="newsLetter_input">
                            <input type="email" name="" id="" placeholder='Enter Your Email'/>
                            <button className="btn newsLetter_btn"> Subscribe</button>
                        </div>
                        

                    </div>

                </Col>
                <Col lg='6'>
                    <div className="newsLetter_img">
                        <img src={Tourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter