import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './TourCard.css';

import calculateAvgRating from '../Utils/avgRating';

const Tourcard=({tour})=> {

    const { _id,title,days,photo,price,featured, reviews}=tour

    const {totalRating, avgRating}= calculateAvgRating(reviews);

  return (
    <div className="tour_card">
        <Card>
            <div className="tour_img">
                <img src={photo} alt="tour img" />
                {featured &&<span>Featured</span>}
            </div>
        
        <Card.Body>
        <div className="card_top d-flex align-items-center justify-content-between">
                <span className='tour_location d-flex align-items-center gap-1'>
                <i class="fa-solid fa-calendar-days"></i>{days} Days
                </span>
                {/*---- Rating ----*/}
                <span className='tour_lrating d-flex align-items-center gap-1'>
                <i class="fa-solid fa-star"></i>{avgRating===0? null : avgRating}
                {totalRating===0?("Not rated"):(<span>({reviews.length})</span>
                )}
                </span>
                
            </div>

            <h5 className="tour_title"><Link to={`/tours/${_id}`}>{title}</Link></h5>

            <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
                <h5>${price}<span>/per person</span></h5>

                <Button className="btn booking_btn">
                    <Link to={`/tours/${_id}`}>Book Now</Link>
                </Button>
            </div>
        </Card.Body>
            

        </Card>
    </div>
  )
}

export default Tourcard