import React from 'react'
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../Utils/config";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import UserBar from './UserBar';

const Adminusers = () => {
    const {
        data: user,
        loading,
        error,
      } = useFetch(`${BASE_URL}/users/search/getAlladmin`);
      const { data: adminCount } = useFetch(`${BASE_URL}/users/search/getAllAdminCount`);
 
  return (
    <div>
    <div className="at_head d-flex">
      <div className="tour_count">
        <div className="atcount">
          <p>
            Total Admins
            <span>{adminCount}</span>
          </p>
        </div>
      </div>
      <div className="atselect_buttons">
        <Link to={"/admin/webusers"}>
          <Button className="admin_bokking_btn">All Web Users</Button>
        </Link>
        <Link to={"/admin/adminusers"}>
          <Button className="admin_bokking_btn">Admin Users</Button>
        </Link>

      </div>
      <div className="at_AddTourBtn">
      <Link to={"/auth/register"}>
        <Button className="admin_bokking_btn">
          <i class="fa-solid fa-plus"></i> Add Admin
        </Button>
        </Link>
      </div>
    </div>
    <div className="admin_booking_header d-flex">
      <Col lg="7">
        <div className="htitle d-flex">
          <Col lg="6">
            <p>User Email</p>{" "}
          </Col>
          <Col lg="3">
            <p>Full Name</p>
          </Col>
          <Col lg="3">
            <p>Country</p>
          </Col>
        </div>
      </Col>
      <Col lg="2">
        <div className="hstatuses d-flex">
          
            <p>Telephone</p>
          
        </div>
      </Col>
      <Col lg="3">
        <div className="hoptions">
          <p>Options</p>
        </div>
      </Col>
    </div>
   <div className="scrollsection">
      {loading && <h4>Loading..........</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        user?.map((user) => (
          <Col lg="12" key={user.id}>
            <UserBar user={user} />
          </Col>
        ))}
    </div> 
  </div>
  )
}

export default Adminusers