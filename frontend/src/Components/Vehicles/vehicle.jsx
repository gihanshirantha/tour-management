import React from 'react'
import '../Vehicles/vehicle.css'
 


const vehicle = ({vehicle}) => {

    const {id,title,desc,photo}=vehicle

  return (
    <div class="vehicle_card">
  <div class="card_box">
    <div class="imgBx">
      <img src={photo}/>
    </div>
    <div class="contentBx">
      <h2>{title}</h2>
      <div class="size">
        
      </div>
      <div class="color">
        <h3>{desc}</h3>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default vehicle