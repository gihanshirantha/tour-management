import React from 'react'
import './bookingbar.css'
import {Button,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const BookingBar = ({booking}) => {

    const options = {day:'numeric', month:'long', year:'numeric'};

    const {id,tourTitle,startDate,guestSize,status,payment_status}=booking;

 const handleConfirm=async e=>{
    e.preventDefalt();

 }

 const handleCancel=async e=>{
    e.preventDefalt();

 }

 const handleFinished=async e=>{
    e.preventDefalt();

 }

 const handleDelete=async e=>{
    e.preventDefalt();

 }


  return (
    <>
    <div className="admin_booking_data d-flex">
        
        <Col lg='5'>
        <div className="hdata d-flex">
        <Col lg='6'>
        <p>{tourTitle}</p> </Col>  
        <Col lg='3'>
        <p>{new Date(startDate).toLocaleDateString("en-US",options)}</p></Col>  
        <Col lg='3' >
        <p>{guestSize}</p></Col>  
        
        
      </div>
        </Col>
        <Col lg='3'>
        <div className="hstatusesdata d-flex">
            <Col lg='6'>
            <p>{status}</p>
            </Col>
            <Col lg='6'>
        <p>{payment_status}</p>

            </Col>

        
      </div>
        </Col>
        <Col lg='4'>
        <div className="hoptions">
        <Button className='option_btns btn btn-success' onClick={handleConfirm}><i class="fa-solid fa-calendar-check"></i></Button>
        <Button className='option_btns btn btn-secondary' onClick={handleCancel}><i class="fa-sharp fa-solid fa-ban"></i></Button>
        <Button className='option_btns btn btn-warning' onClick={handleFinished}><i class="fa-solid fa-circle-check"></i></Button>
        <Button className='option_btns btn btn-danger'onClick={handleDelete}><i class="fa-solid fa-trash"></i></Button>
        <Button className='option_btns btn btn-primary'><i class="fa-solid fa-eye"></i></Button>


      </div>
        </Col>
    
      
      

    </div>
    
    </>
  )
}

export default BookingBar