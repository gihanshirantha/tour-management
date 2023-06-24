import React,{useState, useContext} from 'react'
import './Booking.css'

import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import {useNavigate} from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../Utils/config';

const Booking = ({tour,avgRating}) => {

    

    const {price,reviews}=tour;
    const navigate=useNavigate();

    const {user}=useContext(AuthContext);

    const [booking, setBooking]=useState({
        userId:user && user._id,
        tourId:tour && tour.id,
        tourTitle:tour && tour.title,
        days:tour && tour.days,
        price:tour && tour.price,
        userName:'',
        userEmail:user && user.email,
        country:'',
        contactNo:'',
        whatsappNo:'',
        startDate:'',
        endDate:'',
        guestSize:'',
        massege:''
        

    });

    const handleChange = e =>{
        setBooking(Prev=>({...Prev,[e.target.id]:e.target.value}))
    };

    const serviceFee=10;
    const totalAmount=Number(price)*Number(booking.guestSize) + Number(serviceFee)

    // send data to server
    const hndleClick= async e=>{
        
        e.preventDefault()

        try {
            if(!user || user===undefined || user===null){
                return alert('Please Sign in')
            }
            const res=await fetch(`${BASE_URL}/booking`,{
                method:'POST',
                mode:'cors',
                headers:{
                  'content-type':'application/json'
                },
               credentials:'include',
               body:JSON.stringify(booking), 
            });

            const result=await res.json();
            if(!res.ok){
                return alert (result.message);
            }
            navigate("/thank-you");
            
        } catch (err) {
            alert(err.message)
            
        }

        navigate("/thank-you")
    };

  return (
    <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>${price}<span>/per Person</span></h3>
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
                    id='userName'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="email" 
                    placeholder='Email Address' 
                    id='userEmail'
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
                    id='contactNo'
                     required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="tel" 
                    placeholder='Whatsapp Number' 
                    id='whatsappNo'
                     required onChange={handleChange} />
                </FormGroup>
                </div>

                <div className="book_form-Tinfo">
                <h5>Tour Information</h5>
                <FormGroup className='mb-3'>
                    <input 
                    type="date" 
                    placeholder='Arrival Date' 
                    id='startDate'
                    required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <input 
                    type="date" 
                    placeholder='Departure Date' 
                    id='endDate'
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
                    id='massege'
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