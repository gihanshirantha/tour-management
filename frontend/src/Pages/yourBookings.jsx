import React from 'react'
import CommonSection from '../Shared/CommonSection'
import {Container,Row,Col,Button } from 'react-bootstrap'
import '../Styles/yourBooking.css'
import {BASE_URL} from '../Utils/config'
import BookingBar from '../Shared/BookingBar/BookingBar'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'



function YourBookings() {

    const {id}=useParams();
    const {data:booking,loading,error}=useFetch(`${BASE_URL}/booking/users/${id}`);
   
  return (
    <>
        <CommonSection title={"Your Bookings"}/>
        <Container>

        {
        loading && <h4>Loading..........</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {!loading && !error &&
      booking?.map(booking=>(
      <Col lg='12' className='data_table'data-aos="zoom-in" data-aos-duration='3000'>
        <BookingBar booking={booking}/>
      </Col>))}
      </Container>
    
    </>
  )
}


export default YourBookings