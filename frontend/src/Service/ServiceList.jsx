import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'react-bootstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customaizationImg from '../assets/images/customization.png'

const serviceData =[
    {
        imgUrl:weatherImg,
        title:"Qualified Drivers and Staff",
        desc: "Our large fleet of vehicles includes luxury. Our drivers are friendly and well trained. ",
    },
    {
        imgUrl:guideImg,
        title:"24/7 Support",
        desc: "Our customer service isn’t time bound. Travel agents at Tours for Sri lanka are always ready to serve you at anytime.",
    },
    {
        imgUrl:customaizationImg,
        title:"No Hidden Charges",
        desc: "Not only is our charge affordable but also transparent. We keep our pricings clear and simple.",
    }
]



const ServiceList=()=> {
  return (
    <div className='d-flex gap-5'>
        {
            serviceData.map((item,index)=> <Col lg='3' key={index}><ServiceCard item={item}/></Col> )
        }
    </div>
  )
}

export default ServiceList