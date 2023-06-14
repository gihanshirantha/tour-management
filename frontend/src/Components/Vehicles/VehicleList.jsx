import React from 'react'
import {Col} from 'react-bootstrap'
import Vehicle from './vehicle'
import vehicledata from '../../assets/data/vehicledata'


const VehicleList = () => {
  return (
    <div className='d-flex  gap-5 '>
        {vehicledata?.map(vehicle=>(
            <Col lg='4' className="mb-4" key={vehicle.id}>
                <Vehicle vehicle={vehicle}/>
            </Col>
        ))}
    </div>
  )
}

export default VehicleList