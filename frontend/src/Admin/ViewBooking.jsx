import React,{useRef} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utils/config";
import "./Styles/veiwbooking.css";

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const ViewBooking = () => {
  const pdfRef=useRef()
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

  const downloadPDF=()=>{
    const input=pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape','mm','a3',true);
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("bookinginfo.pdf");
    })
  }

  return (
    
    <div className="booking_view">
      <div ref={pdfRef}>
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
            <h3>Client Details</h3>
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
              
            </div>
          </div>
        </Col>
      </Row>
     
    </div>
    <Link to={"/admin/allbooking"}>
                <Button className="admin_bokking_btn">All Bookings</Button>
              </Link>

      <Button className="admin_bokking_btn" onClick={downloadPDF}>Download As Pdf</Button>
    </div>
  );
};

export default ViewBooking;
