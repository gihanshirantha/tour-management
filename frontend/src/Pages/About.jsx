import React from 'react'
import CommonSection from '../Shared/CommonSection'
import {Container, Row , Col} from 'react-bootstrap'
import VehicleList from '../Components/Vehicles/VehicleList'
import '../Styles/about.css'

import Graphic from '../assets/images/gallery-07.jpg'

const About = () => {
    window.scrollTo(0,0);
  return (
    <div>
        <CommonSection title={"ABOUT US"}/>

        <section className='about_us'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={Graphic} alt="" className='w-100' data-aos="fade-right" data-aos-duration='1600'/>
                    </Col>
                    <Col lg='6'>
                        <h1 data-aos="fade-left" data-aos-duration='1600' >About Us</h1>
                        <p data-aos="fade-left" data-aos-duration='1600' data-aos-delay='400'>We are Travel Oriented organization based in Sri Lanka that provides the globe with information and services with regard to inbound tours to our splendid island. Our website serves as a store of information, gathered through research and experienced and has served a multitude of visitors in planning a tour that is both practical and economical.
Working with professionals in the trade, our clients are always assured of a service par excellence.<br/><br/>

Our tour guides are specially trained and hold the license of competence issued by the Ceylon Tourist Board. They also lecture in a variety of languages offering you the opportunity of having a guide speaking your own mother tongue.<br/>
The transport provided by us ranges from cars to large coaches and they are all A/C, very comfortable and driven by safe and courteous chauffeurs.<br/><br/>

Our tour packages offer specialties of Sri Lanka- i.e. Nature, Culture, Wild Life, Adventure, Birds, Elephants, Whales Dolphins, etc…We specialize in tailor-made tour packages to suit the requirements of an individual, family, or Group.<br/><br/>


Tours For Sri Lanka offers you a memorable vacation in Sri Lanka with loads of fun and excitement and memories to last a lifetime. Through this website, we invite you to take a glimpse of Sri Lanka, which is not only the lustrous Pearl of the Indian Ocean but one of the most exciting locations for your next tour, or vacation.
 You will be enticed by the rich diversity of sights and sensations that this little island has to offer. Step into the island and discover.<br/><br/>

This is your one-stop travel shop to find and book the best travel packages Sri Lanka has to offer. Choose a Tour Package or create one of your own and leave the rest to us. Contact us now and get one step closer to your dream Sri Lanka Tour today.<br/>
Our goal is to provide a unique, unforgettable travel experience that reflects the traveler’s true desires and interests and perform this service with professionalism, creativity, and knowledge. We want our clients to experience the real Sri Lanka, rather than see it.</p>
                    </Col>
                </Row>
                <hr/>
                <div className="vehical_info" >
                <Row>
                    <Col>
                    <h1 className='vehicle_text'data-aos="fade-right" data-aos-duration='1600'>Our Vehicle Fleet</h1>
                    </Col>
                    <Col className='d-flex' data-aos="fade-left" data-aos-duration='1500'>
                    <VehicleList/>
                    </Col>
                    
                </Row>
                </div>
                
            </Container>

        </section>
        
        <section className="choose_us">
            <Container>
            <hr/>
                <h1 data-aos="fade-right" data-aos-duration='1600'>WHY CHOOSE US TOURS FOR SRI LANKA</h1>
                <Row>
                    <Col lg='4'>
                    <div className="choose_us-box" data-aos="fade-up"
     data-aos-duration='2000'>
                    <h3>Qualified Drivers and Staff</h3>
                    <p>Our large fleet of vehicles includes luxury and mini 
                        coaches, vans, cars and even limousines that operate 
                        24 hours. Our drivers are friendly and well trained. 
                        Furthermore our expert local tour guides have extensive 
                        knowledge on an array of destinations and will share with
                         you inside knowledge and firsthand experience on every 
                         location making your tour an ultimate one.</p>
                </div>
                    </Col>
                    <Col lg='4'>
                    <div className="choose_us-box" data-aos="fade-up"
     data-aos-duration='2000'>
                        <h3>
                        No Hidden Charges
                        </h3>
                        <p>Not only is our charge affordable but also transparent. We keep our 
                            pricings clear and simple. The absence of hidden charges has helped
                             us develop a good mutual understanding with our clients resulting 
                             in them finding confidence in the tour packages we offer at a 
                             fraction of cost than that they will have to incur elsewhere.</p>
                    </div>
                    </Col>
                    <Col lg='4'>
                    <div className="choose_us-box" data-aos="fade-up"
     data-aos-duration='2000'>
                        <h3>24/7 Support</h3>
                        <p>Our customer service isn’t time bound. Travel agents at Tours for 
                            Sri lanka are always ready to serve you at anytime. Reach us at a
                            nytime of the day and you’re sure to be guided by our friendly 
                            travel consultants with effective solutions to your travel problems.</p>
                            </div>
                    </Col>

                </Row>
                <Row>
                    <Col lg='4'>

                    <div className="choose_us-box" data-aos="fade-up"
     data-aos-duration='2000'>
                    <h3>Value for Money</h3>
                    <p>We don’t believe in a job half done. It’s not in our policies. 
                        We dig into the very last detail to make sure that our service is 
                        perfect. Travelling with Tours for Sri lanka will create an experience 
                        which you will treasure, a service with unmatched quality and a journey 
                        worth your money.</p>
                </div>
                    </Col>
                    <Col lg='4'>
                    <div className="choose_us-box" data-aos="fade-up"
     data-aos-duration='2000'>
                        <h3>
                        Languages and culture
                        </h3>
                        <p>At Tours for Sri lanka Communicating is made simple since 
                            personalized service to our clients are offered by multilingual 
                            customer service agents with language proficiency in English, 
                            Japanese, Chinese, German, Russian, Arabic, French and Spanish. 
                            This ensures that with no doubt what is asked for is delivered.</p>
                            </div>
                    </Col>
                    <Col lg='4'>
                    <div className="choose_us-box" data-aos="fade-up"
     data-aos-duration='2000'>
                        <h3>Instant Response</h3>
                        <p>At Tours for Sri lanka we value time as much as you do. We 
                            dislike disappointing you with delays and forgotten inquiries 
                            which is why we strive to offer a service with instant response 
                            to your needs. From day one till your travel is complete and your 
                            feedback is heard we are in touch with you making sure everything 
                            you wanted your trip to be is just in their right places.</p>
                            </div>
                    </Col>

                </Row>
                
            </Container>
        </section>
        <section className="photo_gallery">
            
        </section>
    </div>
  )
}

export default About