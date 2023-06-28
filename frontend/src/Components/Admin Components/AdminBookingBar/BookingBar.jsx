import React from "react";
import "./bookingbar.css";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../Utils/config";

const BookingBar = ({ booking }) => {
  const options = { day: "numeric", month: "long", year: "numeric" };

  const { _id, tourTitle, startDate, guestSize, status, payment_status } =
    booking;

  const handleClickConfirm = async (e) => {
    e.preventDefault();
    try {
      const res=await fetch(`${BASE_URL}/booking/confirm/${_id}`,{
          method:'PUT',
          mode:'cors',
          headers: {
              'Content-Type': 'application/json',
            },

      });
      const result=await res.json();
      if(res.ok){
          return alert (result.message);
      }
  } catch (err) {
      alert(err.message)
  }
  };

  const handleCancel = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/booking/cancel/${_id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      if (res.ok) {
        return alert(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleFinished = async (e) => {
    e.preventDefault();
    try {
      const res=await fetch(`${BASE_URL}/booking/finished/${_id}`,{
          method:'PUT',
          mode:'cors',
          headers: {
              'Content-Type': 'application/json',
            },

      });
      const result=await res.json();
      if(res.ok){
          return alert (result.message);
      }
  } catch (err) {
      alert(err.message)
  }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res=await fetch(`${BASE_URL}/booking/${_id}`,{
          method:'DELETE',
          mode:'cors',
          headers: {
              'Content-Type': 'application/json',
            },

      });
      const result=await res.json();
      if(res.ok){
          return alert (result.message);
      }
  } catch (err) {
      alert(err.message)
  }
  };

  return (
    <>
      <div className="admin_booking_data d-flex">
        <Col lg="5">
          <div className="hdata d-flex">
            <Col lg="6">
              <p>{tourTitle}</p>{" "}
            </Col>
            <Col lg="3">
              <p>{new Date(startDate).toLocaleDateString("en-US", options)}</p>
            </Col>
            <Col lg="3">
              <p>{guestSize}</p>
            </Col>
          </div>
        </Col>
        <Col lg="3">
          <div className="hstatusesdata d-flex">
            <Col lg="6">
              <p>{status}</p>
            </Col>
            <Col lg="6">
              <p>{payment_status}</p>
            </Col>
          </div>
        </Col>
        <Col lg="4">
          <div className="hoptions">
            <Button
              className="option_btns btn btn-success"
              onClick={handleClickConfirm}
            >
              <i class="fa-solid fa-calendar-check"></i>
            </Button>
            <Button
              className="option_btns btn btn-secondary"
              onClick={handleCancel}
            >
              <i class="fa-sharp fa-solid fa-ban"></i>
            </Button>
            <Button
              className="option_btns btn btn-warning"
              onClick={handleFinished}
            >
              <i class="fa-solid fa-circle-check"></i>
            </Button>
            <Button
              className="option_btns btn btn-danger"
              onClick={handleDelete}
            >
              <i class="fa-solid fa-trash"></i>
            </Button>
            <Link to={`/admin/viewbooking/${_id}`}>
              <Button className="option_btns btn btn-primary">
                <i class="fa-solid fa-eye"></i>
              </Button>
            </Link>
          </div>
        </Col>
      </div>
    </>
  );
};

export default BookingBar;
