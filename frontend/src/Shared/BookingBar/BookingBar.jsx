import React from 'react'
import { Button ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Styles/yourBooking.css'
import { BASE_URL } from '../../Utils/config';

const BookingBar = ({booking}) => {

      //Date format
  const options = {day:'numeric', month:'long', year:'numeric'};
    const {_id,tourTitle,startDate,days,guestSize,price,status}=booking;
    
    const serviceFee=10;
    const totalAmount=Number(price)*Number(booking.guestSize) + Number(serviceFee)

            // send data to server
            const hndleClick= async e=>{
        
                e.preventDefault()

                try {
                    const res=await fetch(`${BASE_URL}/booking/cancel/${_id}`,{
                        method:'PUT',
                        mode:'cors',
                        headers: {
                            'Content-Type': 'application/json',
                          },

                    });
                    const result=await res.json();
                    if(!res.ok){
                        return alert (result.message);
                    }
                } catch (err) {
                    alert(err.message)
                }
    
            }
        
  return (
    <div>
        <Col lg='12'>
            <div className="data_bar d-flex">
                <div className="data_title">
                    <h3>Title</h3>
                    <p>{tourTitle}</p>
                </div>
                <div className="data_sdate">
                    <h3>Start Date</h3>
                    <p>{new Date(startDate).toLocaleDateString("en-US",options)}</p>
                </div>
                <div className="data_days">
                    <h3>Days</h3>
                    <p>{days}</p>
                </div>                
                <div className="data_guestSize">
                    <h3>Guest Size</h3>
                    <p>{guestSize}</p>
                </div>
                <div className="data_price">
                    <h3>Price</h3>
                    <p>$ {totalAmount}</p>
                </div>
                <div className="data_status">
                    <h3>Status</h3>
                    <p>{status}</p>
                </div>
                <div className="data_sdate">
                    <h3>Option</h3>
                    <Link to={`/payment/${_id}`}>
          <Button className='btn payment__btn  !important' >Pay ${totalAmount}</Button>
          </Link> 
          <Button className='btn delete__btn  !important' onClick={hndleClick}>Cancel</Button>

                </div>
            </div>
        

            

        </Col>
    </div>
  )
}

export default BookingBar