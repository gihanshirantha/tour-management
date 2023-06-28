import React from 'react'
import useFetch from '../../../hooks/useFetch';
import { BASE_URL } from '../../../Utils/config';
import {Col,Row,Button} from 'react-bootstrap'
import BookingBar from './BookingBar';
import { Link } from 'react-router-dom';

const AllBookings = () => {
    const {data:booking,loading,error}=useFetch(`${BASE_URL}/booking/`);

    
  return (
    <>
    <div className="select_buttons">
    <Link to={'/admin/allbooking'}>
       <Button className='admin_bokking_btn' >All Bookings</Button></Link>
       <Link to={'/admin/waitingbooking'}>
      <Button className='admin_bokking_btn'>Waiting Bookings</Button></Link>

      <Link to={'/admin/confirmedbooking'}>
      <Button className='admin_bokking_btn'>Confirmed Bookings</Button></Link>

      <Link to={'/admin/finishedbooking'}>
      <Button className='admin_bokking_btn'>Finished Bookings</Button></Link>

  
</div>
<div className="admin_booking_header d-flex">
  
    <Col lg='5'>
    <div className="htitle d-flex">
    <Col lg='6'>
  <p>Tour Title</p> </Col>  
  <Col lg='3'>
  <p>Stat Date</p></Col>  
  <Col lg='3'>
  <p>Guest Size</p></Col> 
  </div>
    </Col>
    <Col lg='3'>
    <div className="hstatuses d-flex">
    <Col lg='4'>
    <p>Status</p>
    </Col>
      <Col lg='8'>
      <p>Payment Status</p>
      </Col>
    
   
  </div>
    </Col>
    <Col lg='4'>
    <div className="hoptions">
    <p>Options</p>
  </div>
    </Col>

  
  

</div>
    <div>
     

        {
        loading && <h4>Loading..........</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {!loading && !error &&
      booking?.map(booking=>(
      <Col lg='12' key={booking.id} data-aos="fade-up" data-aos-duration='2000'>
        <BookingBar booking={booking}/>
      </Col>))}
      

      
    </div>
    </>
  )
}

export default AllBookings