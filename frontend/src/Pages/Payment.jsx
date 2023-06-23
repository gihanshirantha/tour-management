import React from 'react'
import {useSelector} from 'react-redux'

const Payment = () => {
    const totalAmount=useSelector((state)=>state.booking.totalAmount);
  return (
    <div>hari</div>
  )
}

export default Payment