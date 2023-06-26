import React from 'react'
import {Link} from 'react-router-dom'
import './DayTourcard.css'

const DayTourcard = ({daytour}) => {

    const {_id,title,desc,photo}=daytour

  return (
    <article class="dcard">
  <img
    class="card__background"
    src={photo}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">{title}</h2>
      <p class="card__description">
        {desc}
      </p>
    </div>
    <button class="card__button"><Link to={`/daytourDetails/${_id}`}>Book Now</Link></button>
  </div>
</article>
  )
}

export default DayTourcard