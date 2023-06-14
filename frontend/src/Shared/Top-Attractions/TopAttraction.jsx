import React from 'react'
import '../Top-Attractions/topattractions.css'

import day1 from '../../assets/images/dayt01.jpg';
import day2 from '../../assets/images/dayt02.jpg';
import day3 from '../../assets/images/dayt03.jpg';
import day4 from '../../assets/images/dayt04.jpg';
import day5 from '../../assets/images/dayt05.jpg';
import day6 from '../../assets/images/dayt06.jpg';

const TopAttraction = () => {
  return (
    <div className='tcontent'>
        <div class="background"></div>
    

    <section class="carousel">
      <h1 class="categories__title ">Top Attractions</h1>
      <div class="carousel__container">


        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src={day1}
            alt="people"
          />
          <div class="carousel-item__details">
            <h5 class="carousel-item__details--title">Sigiriya</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src={day2}
            alt="people"
          />
          <div class="carousel-item__details">
            <h5 class="carousel-item__details--title">Sigiriya</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src={day3}
            alt="people"
          />
          <div class="carousel-item__details">
            <h5 class="carousel-item__details--title">Sigiriya</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src={day4}
            alt="people"
          />
          <div class="carousel-item__details">
            <h5 class="carousel-item__details--title">Sigiriya</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src={day5}
            alt="people"
          />
          <div class="carousel-item__details">
            <h5 class="carousel-item__details--title">Sigiriya</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src={day6}
            alt="people"
          />
          <div class="carousel-item__details">
            <h5 class="carousel-item__details--title">Sigiriya</h5>
            <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>

        
      </div>
    </section>
    </div>
  )
}

export default TopAttraction