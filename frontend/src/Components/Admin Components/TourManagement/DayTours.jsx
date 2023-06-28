import React from "react";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../Utils/config";
import { Col, Row, Button } from "react-bootstrap";
import TourBar from "./TourBar";
import { Link } from "react-router-dom";

const DayTours = () => {
  const {
    data: tour,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getDayTours`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/dayTourCount`);
  return (
    <div>
      <div className="at_head d-flex">
        <div className="tour_count">
          <div className="atcount">
            <p>
              Total Tours
              <span>{tourCount}</span>
            </p>
          </div>
        </div>
        <div className="atselect_buttons">
          <Link to={"/admin/alltours"}>
            <Button className="admin_bokking_btn">All Tours</Button>
          </Link>
          <Link to={"/admin/daytours"}>
            <Button className="admin_bokking_btn">Day Tours</Button>
          </Link>

          <Link to={"/admin/roundtours"}>
            <Button className="admin_bokking_btn">Round Tours</Button>
          </Link>
        </div>
        <div className="at_AddTourBtn">
          <Button className="admin_bokking_btn">
            <i class="fa-solid fa-plus"></i> Add Tour
          </Button>
        </div>
      </div>
      <div className="admin_booking_header d-flex">
        <Col lg="5">
          <div className="htitle d-flex">
            <Col lg="6">
              <p>Tour Title</p>{" "}
            </Col>
            <Col lg="3">
              <p>Days</p>
            </Col>
            <Col lg="3">
              <p>Tour Mode</p>
            </Col>
          </div>
        </Col>
        <Col lg="3">
          <div className="hstatuses d-flex">
            <Col lg="4">
              <p>Featured</p>
            </Col>
            <Col lg="4">
              <p>Price</p>
            </Col>
          </div>
        </Col>
        <Col lg="4">
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
          tour?.map((tour) => (
            <Col lg="12" key={tour.id}>
              <TourBar tour={tour} />
            </Col>
          ))}
      </div>
    </div>
  );
};

export default DayTours;
