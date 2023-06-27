import React from 'react'
import './Styles/dashboad.css'
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col lg='3'>
          <div className="db_cbox">
            <div className="dbc_title">
              <h4>Tour Packages</h4>
              <h2>100</h2>
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
              <h4>Vehicles</h4>
              <h2>13</h2>
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
              <h4>Bookings</h4>
              <h2>68</h2>
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
              <h4>Users</h4>
              <h2>98</h2>
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