import useFetch from '../hooks/useFetch'
import React  from 'react'
import { BASE_URL } from '../Utils/config'
import {useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'

import '../Styles/payment.css'

const Payment = () => {
  const {id}=useParams();
  const navigate=useNavigate();

  const {data:booking,loading,error}=useFetch(`${BASE_URL}/booking/${id}`);
  const {price,status}=booking;
    
  const serviceFee=10;
  const totalAmount=Number(price)*Number(booking.guestSize) + Number(serviceFee)

  const submited=async (event)=>{
    event.preventDefault()
  
  const paymentObj={
    amount:totalAmount
    
  }
        try {
          const res = await fetch(`${BASE_URL}/payment/${id}`,{
            method:'POST',
            mode:'cors',
          
            headers:{
              'Content-Type': 'application/json'
            },
          credentials:'include',
          body:JSON.stringify(paymentObj)
        })

        const result=await res.json()
        if(!res.ok)alert(result.message)
        alert("Review Submited")
          navigate("/thank-you")
        } catch (err) {
          alert(err.message)
        }
        }

  return (
    <div>
      <Container>
        <Row>
          <Col lg='4'></Col>
          <Col lg='4'>
            <div className="payment_card mt-5" data-aos="zoom-in" data-aos-duration='3000'>
              <div className="payment_details">
                <h2>Payment Details</h2>
              </div>
              <form  onSubmit={submited} className='payment-form'>
              <div class="info">
                    <label for="cardholdername">Name</label>
                    <input placeholder="e.g. Gihan Shirantha" id="cardholdername" type="text" required />
                </div>

                <div class="row number">
                <div class="info">
                    <label for="cardnumber">Card number</label>
                    <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxlength="19" placeholder="8888-8888-8888-8888" required/>
                </div>
            </div>  
            <div className="payment_conf d-flex">
            <input id="cardnumber" type="number" pattern="[0-9]{16,19}" maxlength="5" placeholder="MM/YY" required/>
            <input id="cardnumber" type="number" pattern="[0-9]{16,19}" maxlength="3" placeholder="CVC" required/>

            </div>
            <div class="submit-button">
        <button className='submit-btn' type="submit"><i class="ion-locked"></i> Confirm and Pay ${totalAmount}</button>
    </div>
              </form>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Payment