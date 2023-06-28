import React from 'react'
import './Styles/dashboad.css'
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../Utils/config'


const Dashboard = () => {

const {data:tourCount}=useFetch(`${BASE_URL}/tours/search/getTourCount`);
const {data:waiting}=useFetch(`${BASE_URL}/booking/search/paidwaiting`);
const {data:confirmed}=useFetch(`${BASE_URL}/booking/search/confirmed`);
const {data:finished}=useFetch(`${BASE_URL}/booking/search/finished`);






  

  return (
    <div>
      <Row>
        <Col lg='3'>
          <div className="db_cbox">
            <div className="dbc_title">
              <h4>Tour Packages</h4>
              <h2>{tourCount}</h2>
            </div>
            <div className="dbc_link d-flex">
            <Link to={'#'}>See more details</Link>
            <div className="dbc_icon">
            <i class="fa-solid fa-shoe-prints"></i>
            </div>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <div className="db_cbox">
            <div className="dbc_title">
              <h4>Waiting Bookings</h4>
              <h2>{waiting}</h2>
            </div>
            <div className="dbc_link d-flex">
            <Link to={'#'}>See more details</Link>
            <div className="dbc_icon">
            <i class="fa-solid fa-car"></i>
            </div>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <div className="db_cbox">
            <div className="dbc_title">
              <h4>Confirmed Bookings</h4>
              <h2>{confirmed}</h2>
            </div>
            <div className="dbc_link d-flex">
            <Link to={'#'}>See more details</Link>
            <div className="dbc_icon">
            <i class="fa-solid fa-calendar-days"></i>
            </div>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <div className="db_cbox">
            <div className="dbc_title">
              <h4>Finished Bookings</h4>
              <h2>{finished}</h2>
            </div>
            <div className="dbc_link d-flex">
            <Link to={'#'}>See more details</Link>
            <div className="dbc_icon">
            <i class="fa-solid fa-user"></i>
            </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard