import useFetch from '../hooks/useFetch'
import React  from 'react'
import { BASE_URL } from '../Utils/config'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'



const Payment = () => {
  const {id}=useParams();

  const {data:booking,loading,error}=useFetch(`${BASE_URL}/booking/${id}`);
  const {_id,price,status}=booking;
    
  const serviceFee=10;
  const totalAmount=Number(price)*Number(booking.guestSize) + Number(serviceFee)
  return (
    <div></div>
  )
}

export default Payment