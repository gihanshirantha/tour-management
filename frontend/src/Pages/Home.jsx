import React, {useRef, useEffect} from 'react'
import '../Styles/home.css'
import Subtitle from '../Shared/Subtitle'
import SearchBar from '../Shared/SearchBar'
import ServiceList from '../Service/ServiceList'
import ImageGallery from '../Components/ImageGallery/ImageGallery'
import Testimonials from '../Components/Testimonials/Testimonials'

import { Container,Row, Col } from "react-bootstrap"
import heroVid from'../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import FeaturedTours from '../Components/Featured-tours/FeaturedTourList'
import NewsLetter from '../Shared/NewsLetter'




function Home() {

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='6'>

            
            <div className="hero_content" data-aos="fade-right" data-aos-duration='1600'>
                            <div className="hero_subtitle d-flex align-items-center">
                              <Subtitle subtitle={'know Before You Go'}/>
                              <img src={worldImg}/>
                              
                            </div>
                            <h1>Traveling opens the Door to creating{" "} <span className='highlight'> memories</span> </h1>
                            <p>We provide seamless and personalized travel arrangements tailored to your preferences. From flights and accommodations to unique tours and activities, our team of experts is committed to delivering exceptional service, ensuring every aspect of your trip is handled with care and attention to detail.</p>
                          </div>
            

            </Col>

            
            <Col lg='6'>
              <div className="hero_img-box mt-4">
              <div data-aos="fade-left" data-aos-duration='2000'>
              <video  src={heroVid} controls autoPlay muted loop/>
              </div>

                
              </div>
            </Col>



            {/*--- Search bar ---*/}
            <div data-aos="fade-left" data-aos-duration='1500' >
              <SearchBar/>
            </div>
            

          </Row>
        </Container>
      </section>

      {/*--- Services ---*/}
      <section>
        <Container >
          <Row>
            <Col lg="3" data-aos="fade-right"
     data-aos-duration="3000">
              <h5 className='service_subtitle'>What we serve</h5>
              <h2 className='service_title'>Why choose us tours for Sri Lanka</h2>
            </Col>
            <Col lg="9" data-aos="fade-left"
     data-aos-duration="3000">
            <ServiceList/>

            </Col>
          </Row>
        </Container>
      </section>

      {/*--- Featured tour ---*/}

      <section > 
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"}/>
              <h2 className='featured_tour-title'>Our featured tours</h2>  
            </Col>
            <FeaturedTours/>
          </Row>
        </Container>
      </section>


      {/*--- Experience  ---*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_contemt">
              <div data-aos="fade-right" data-aos-duration='2000'>
                <Subtitle subtitle={"Experience"} />
              </div>
                

                <h2 data-aos="fade-right" data-aos-duration='2000' data-aos-delay='400'>With our all experience <br />We will serve you</h2>
                <p data-aos="fade-right" data-aos-duration='2000' data-aos-delay='600'>Our team of experienced professionals is dedicated to delivering exceptional customer service, ensuring that every aspect of your travel booking is handled with utmost care and attention to detail. From the moment you reach out to us to the time you return from your journey, we strive to make your travel experience smooth, enjoyable, and truly memorable.</p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5" 
              data-aos="fade-up" data-aos-duration='2000'>
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Reguler clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>

            <div className="experience_img" data-aos="fade-left" data-aos-duration='1700'>
              <img src={experienceImg} alt=""/>
            </div>

            </Col>

          </Row>
        </Container>
      </section>

      {/*--- Gallery  ---*/}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <div data-aos="fade-right" data-aos-duration='2000'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery_title'>Visit Our customers tour gallery</h2>
            </div>
          </Col>
          <Col lg='12'>
        <ImageGallery/>

          </Col>
        </Row>
      </Container>
    </section>

    {/*--- Testimonial  ---*/}
    <section>
      <Container>
        <Row>
          <Col lg="12">
          <div data-aos="fade-right" data-aos-duration='2000'>
            <Subtitle subtitle={'Fans Love'}></Subtitle>
            <h2 className="testimonial_title">What our fans say about us</h2>
          </div>
          </Col>
          
          <Col lg="12">
            <Testimonials/>
          </Col>
          
        </Row>
      </Container>
    </section>

    <section>
      <NewsLetter/>
    </section>

    </div>
  )
}

export default Home