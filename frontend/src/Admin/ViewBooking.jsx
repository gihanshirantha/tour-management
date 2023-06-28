import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utils/config";
import "./Styles/veiwbooking.css";

const ViewBooking = () => {
  const { id } = useParams();
  const {
    data: booking,
    loading,
    error,
  } = useFetch(`${BASE_URL}/booking/${id}`);
  console.log(booking);

  const {
    tourTitle,
    days,
    price,
    userName,
    userEmail,
    country,
    contactNo,
    whatsappNo,
    startDate,
    endDate,
    guestSize,
    massege,
    status,
    payment_status,
    payments,
  } = booking;

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <div className="booking_view">
      <Row>
        <Col lg="4">
          <div className="bvtitle">
            <h3>Tour Details</h3>
          </div>
          <div className="bvinfo_box1">
            <div className="bvset1">
              <h6>Tour Title</h6>
              <p>{tourTitle}</p>
            </div>
            <div className="bvset1">
              <h6>Days</h6>
              <p>{days}</p>
            </div>
            <div className="bvset1">
              <h6>Price per Person</h6>
              <p>{price}</p>
            </div>
            <div className="bvset1">
              <h6>Start Date</h6>
              <p>{new Date(startDate).toLocaleDateString("en-US", options)}</p>
            </div>
            <div className="bvset1">
              <h6>End Date</h6>
              <p>{new Date(endDate).toLocaleDateString("en-US", options)}</p>
            </div>
            <div className="bvset1">
              <h6>Guest Size</h6>
              <p>{guestSize}</p>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className="bvtitle">
            <h3>User Details</h3>
          </div>
          <div className="bvinfo_box1">
            <div className="bvset1">
              <h6>Full Name</h6>
              <p>{userName}</p>
            </div>
            <div className="bvset1">
              <h6>Email</h6>
              <p>{userEmail}</p>
            </div>
            <div className="bvset1">
              <h6>Mobile Number</h6>
              <p>{contactNo}</p>
            </div>
            <div className="bvset1">
              <h6>Watsapp</h6>
              <p>{whatsappNo}</p>
            </div>
            <div className="bvset1">
              <h6>Countery</h6>
              <p>{country}</p>
            </div>
            <div className="bvset1">
              <h6>User Massage</h6>
              <p>{massege}</p>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className="bvtitle">
            <h3>Booking status</h3>
          </div>
          <div className="bvinfo_box">
            <div className="bvset2 ">
              <h6>Total Amount</h6>
              <p>$ {totalAmount}</p>
            </div>
            <div className="bvset3">
              <h6>Payment Status</h6>
              <p>{payment_status}</p>
            </div>
            <div className="bvset3">
              <h6>Tour Status</h6>
              <p>{status}</p>
            </div>
            <div className="back_btn">
              <Link to={"/admin/allbooking"}>
                <Button className="admin_bokking_btn">All Bookings</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ViewBooking;
