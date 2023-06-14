import React from 'react'
import DayTourcard from './DayTourcard'
import daytourData from '../../assets/data/daytours'

const DaytourList = () => {
  return (
    <div>
        {daytourData?.map(daytour=>(
            <Col lg='3' className="mb-4" key={daytour.id}>
                <DayTourcard daytour={daytour}/>
            </Col>
        ))}
    </div>
  )
}

export default DaytourList