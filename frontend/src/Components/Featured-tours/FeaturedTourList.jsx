import React from 'react'
import Tourcard from '../../Shared/Tourcard';


import{Col} from 'react-bootstrap';


import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../Utils/config';


const FeaturedTourList = () => {

  const {data: featuredTours, loading, error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  
  return (
    <>
      {
        loading && <h4>Loading..........</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {!loading && !error && featuredTours?.map(tour=>(
      <Col lg="3" className="mb-4" key={tour._id}data-aos="zoom-in" data-aos-duration='3000'>
        <Tourcard tour={tour}/>
      </Col>))}
    </>
  );
};

export default FeaturedTourList