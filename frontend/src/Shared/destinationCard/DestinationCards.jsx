import React from 'react'
import './destinationcard.css'



const DestinationCards = ({destination}) => {

    const {title,desc,photo}=destination

  return (
    <div>
<section class="articles">
  <article class="articles-content">
    <div class="article-wrapper">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div class="article-body">
        <h2>{title}</h2>
        <p>
            {desc}
        </p>

      </div>
    </div>
  </article>
    </section>
    </div>
  )
}

export default DestinationCards