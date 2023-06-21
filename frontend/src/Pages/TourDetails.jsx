import React,{useRef,useState,useContext} from 'react'
import '../Styles/tourDetails.css'
import Booking from '../Components/Booking/Booking'

import {Container, Row,Col,Form, ListGroup} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../Utils/avgRating'
import avatr from '../assets/images/avatar.jpg'
import useFetch from '../hooks/useFetch'
import {BASE_URL} from '../Utils/config'
import { AuthContext } from '../context/AuthContext'


const TourDetails=( )=> {

const {id}=useParams();
const {data:tour,loading,error}=useFetch(`${BASE_URL}/tours/${id}`);
console.log(tour);

  //get review
  const reviewMsgRef=useRef("");
  const [tourRating, setTourRating]=useState(null);
  const {user}= useContext(AuthContext);
// fetch data from database


 

  //Data
  const{photo, title, desc,price,nights,reviews,days,distance,maxGroupSize}=tour;
  


  const{totalRating,avgRating}=calculateAvgRating(reviews);

  //Date format
  const options = {day:'numeric', month:'long', year:'numeric'};

  //submit request 
  const submited = async (event) => {
    event.preventDefault();
    const reviewText=reviewMsgRef.current.value;


    try {
      if(!user || user===undefined || user===null){
        alert('Please Sign in')
      }else{
      const reviewObj={
        username:user?.fullname,
        reviewText,
        rating:tourRating
      }
       
      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'POST ',
        mode:'cors',
        headers:{
          'content-type':'application/json'
        },
      credentials:'include',
      body:JSON.stringify(reviewObj)
    })

    const result=await res.json()
    if(!res.ok)alert(result.message)
    alert("Review Submited")
  }
      
    } catch (err) {
       alert(err.message);
    }
    

    // Submit form data to server or API
  }


 

  return (
    <section> {/*---- Tour info section ----*/}
      <Container>
        {
          loading && <h4 className='text-center pt-5'>Loading.....</h4>
        }
        {
          error && <h4 className='text-center pt-5'>{error}</h4>
        }
        {
          !loading && !error &&  <Row>
          <Col lg='8'>
            <div className="tour_content">
              <img src={photo} alt="" />

              <div className="tour_info">
                <h1>{title}</h1>

                <div className="d-flex align-items-center gap-5">
{/*                 <span className='tour_lrating d-flex align-items-center gap-1'>
                <i class="fa-solid fa-star" style={{'color':"var(--secondary-color)"}}></i>{avgRating===0? null : avgRating}
                {totalRating===0?("Not rated"):(<span>({reviews.length})</span>
                
                )}
                </span> */}

                <span>
                <i class="fa-solid fa-circle-dot" style={{'color':"var(--secondary-color)"}}></i>{nights} Nights
                </span>
                <span>
                  <i class="fa-solid fa-calendar-days" style={{'color':"var(--secondary-color)"}}></i>{days} Days
                  </span>

                </div>
                
                <div className="tourextra-details">
                  
                  <span>
                  <i class="fa-solid fa-dollar-sign"></i>${price} /per Person
                  </span>
                  <span>
                  <i class="fa-sharp fa-solid fa-map-location-dot"></i>${distance} k/m
                  </span>
                  <span>
                  <i class="fa-solid fa-user-group"></i>{maxGroupSize} People
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>

              </div>
              {/*---- Reviews Sections ----*/}

                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submited}>
                    <div className="d-flex align-items-center gap-4 mb-4 rating_group">
                        <span className='gap-2' onClick={()=>setTourRating(1)}>
                          1<i class="fa-solid fa-star"></i>
                          </span>
                        <span className='gap-2' onClick={()=>setTourRating(2)}>
                          2<i class="fa-solid fa-star"></i>
                          </span>
                        <span className='gap-2' onClick={()=>setTourRating(3)}>
                          3<i class="fa-solid fa-star"></i>
                          
                          </span>
                        <span className='gap-2' onClick={()=>setTourRating(4)}>
                          4<i class="fa-solid fa-star"></i>
                          </span>
                        <span className='gap-2' onClick={()=>setTourRating(5)}>
                          5<i class="fa-solid fa-star"></i>
                          </span>

                    </div>
                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required/>
                      <button type='submit' className='btn primary__btn text-white'>Submit</button>
                    </div>
                  </Form>

                  <ListGroup className='user_reviews'>
                    {reviews?.map(review=>(
                      <div className='review_item'>
                        <img src={avatr} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString("en-US",options)}</p>
                            </div>

                            <span className="d-flex align-items-center">
                            <span className='gap-2'>{review.rating}<i class="fa-solid fa-star"></i></span>
                            </span>


                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>

            </div>
          </Col>
          {/*--- Booking Form ---*/}
          <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
        }

      </Container>
    </section>

    



  )
}

export default TourDetails