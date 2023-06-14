import React,{useState} from 'react'
import './Booking.css'

import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import {useNavigate} from 'react-router-dom'

const Booking = ({tour,avgRating}) => {

    const {price,reviews}=tour;
    const navigate=useNavigate();

    const [credentials, setCredentials]=useState({
        userId:'01',
        fullName:'',
        email:'example2gmail.com',
        country:'',
        Cnumber:'',
        Wnumber:'',
        ArrivalDate:'',
        DepartureDate:'',
        guestSize:'',
        Message:''

    });

    const handleChange = e =>{
        setCredentials(Prev=>({...Prev,[e.target.id]:e.target.value}))
    };

    const serviceFee=10;
    const totalAmount=Number(price)*Number(credentials.guestSize) + Number(serviceFee)

    // send data to server
    const hndleClick=e=>{
        e.preventDefault()

        navigate("/thank-you")
    };

  return (
    <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>${price}<span>/per Kilometer</span></h3>
            <span className='tour_lrating d-flex align-items-center gap-1'>
                <i class="fa-solid fa-star" style={{'color':"var(--secondary-color)"}}></i>
                {avgRating===0? null : avgRating}({reviews?.length})
                </span>
        </div>

    {/*--- Booking form ---*/}

        <div className="booking_form">
            
            <Form className="booking_info-form" onSubmit={hndleClick}>
                <div className="book_form-Pinfo">
                <h5>Personal Information</h5>
                <FormGroup className='mb-3'>
                    <input 
                    type="text" 
                    placeholder='Full Name' 
                    id='fullName'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="email" 
                    placeholder='Email Address' 
                    id='email'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="text" 
                    placeholder='Country' 
                    id='country'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="tel" 
                    placeholder='Contact Number' 
                    id='Cnumber'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="tel" 
                    placeholder='Whatsapp Number' 
                    id='Wnumber'
                     required onChange={handleChange} />
                </FormGroup>
                </div>

                <div className="book_form-Tinfo">
                <h5>Tour Information</h5>
                <FormGroup className='mb-3'>
                    <input 
                    type="date" 
                    placeholder='Arrival Date' 
                    id='ArrivalDate'
                    required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="date" 
                    placeholder='Departure Date' 
                    id='DepartureDate'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="number" 
                    placeholder='Guest Size' 
                    id='guestSize'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="text" 
                    placeholder='Message' 
                    id='Message'
                     required onChange={handleChange} />
                </FormGroup>
                </div>

            </Form>
        </div>
        
        <div className="booking_bottom">

          <ListGroup>
            <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-sm-between ">
                <h5 className=' d-flex align-items-center gap-2'>${price}
                <i class="fa-solid fa-xmark"></i>1 person</h5>
                <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-sm-between ">
                <h5>Service Chage</h5>
                <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-sm-between ">
                <h5 className='fs-5 fw-bold'>Total</h5>
                <span className='fs-5 fw-bold'>${totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button className='btn primary__btn w-100 mt-4 !important' onClick={hndleClick}>Book Now</Button>
        </div>

    </div>
  )
}

export default Booking