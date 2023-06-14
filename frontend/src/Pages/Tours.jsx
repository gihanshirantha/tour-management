import React, {useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'



import CommonSection from '../Shared/CommonSection'
import '../Styles/Tours.css'
import Tourcard from '../Shared/Tourcard'
import SearchBar from '../Shared/SearchBar'
import NewsLetter from '../Shared/NewsLetter'
import DayTourcard from '../Shared/DayTours/DayTourcard'
import TopAttraction from '../Shared/Top-Attractions/TopAttraction'

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../Utils/config'




import daytours from '../assets/data/daytours'
function Tours() {

const[pageCount,setPageCount]=useState(0);
const[page,setPage]=useState(0);

const {data:tours, loading, error}=useFetch(`${BASE_URL}/tours?page=${page}`);
const {data:tourCount}=useFetch(`${BASE_URL}/tours/search/getTourCount`);


useEffect(()=>{

  const pages=Math.ceil(tourCount/8)
  setPageCount(pages);
  window.scrollTo(0,0);
},[page, tourCount]);

  return (
    <div>
      <CommonSection title={"All Tours"}/>
      <section>
        <Container>
          <Row>
            <div  data-aos="fade-left" data-aos-duration='1600'>
            <SearchBar/>
            </div>
            <div data-aos="zoom-in" data-aos-duration='1600'>
            <TopAttraction/>
            </div>
            
          </Row>
        </Container>
      </section>



      <section>
      <Container>
          <Row className='DTPackages mt-1 mb-4'>
            <h1 data-aos="fade-up"
     data-aos-duration='2000'>Day Tours Packages</h1>
            <p data-aos="fade-up"
     data-aos-duration='2000'>Day Tour programmes are specially created for travelers who are in Sri Lanka for a short period 
of time or travelers who prefer to do excursions. We have amazing one day tour programmes for
you. Please check it and let us know how you feel about it.</p>
          </Row>
          <Row>
            {
              daytours?.map(daytour=>(
                <Col lg='4' key={daytour.id} className="mt-3" data-aos="fade-up"
                data-aos-duration='2000'>
                  <DayTourcard daytour={daytour}/>
                </Col>
              ))
            }
          </Row>
          </Container>
      </section>
      

          

      <section className='pt-0'>
        <Container>
          <Row className='DTPackages mt-4 mb-4' data-aos="fade-up"
                data-aos-duration='2000'>
            <h1>Round Tour Packages</h1>

          </Row>
            {
              loading && <h4 className='text-centert pt-5'>Loading.......</h4>
            }
            {
              error && <h4 className='text-centert pt-5'>{error}</h4>

            }

          {
            !loading && !error && <Row>
            {
              tours?.map(tour=>(
                <Col lg='3' key={tour.id} className="mt-3" data-aos="fade-up"
                data-aos-duration='2000'>
                  <Tourcard tour={tour}/>
                </Col>
              ))
            }
            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {
                  [...Array(pageCount).keys()].map(number=>(
                    <span kay={number} onClick={()=>setPage(number)}
                    className={page===number ? 'active_page' : ""}>
                      {number+1}
                    </span>
                  ))
                }
              </div>
            </Col>
          </Row>
          }
        </Container>
      </section>
          <NewsLetter/>

      <section>

      </section>


    </div>
  )
}

export default Tours