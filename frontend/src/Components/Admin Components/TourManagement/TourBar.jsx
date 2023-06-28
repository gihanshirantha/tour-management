import React from 'react'
import "./tourbar.css";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../Utils/config";

const TourBar = ({tour}) => {
    
var fea="";
    const {_id,title,days,mode,featured,price}=tour;
    if(featured==true){
         fea="Yes";
    }else{
         fea="No"
    }

    const handleDelete = async (e) => {
        e.preventDefault();
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
    }

  return (
    <div>
              <div className="admin_booking_data d-flex">
        <Col lg="5">
          <div className="hdata d-flex">
            <Col lg="6">
              <p>{title}</p>{" "}
            </Col>
            <Col lg="3">
              <p>{days}</p>
            </Col>
            <Col lg="3">
              <p>{mode}</p>
            </Col>
          </div>
        </Col>
        <Col lg="3">
          <div className="hstatusesdata d-flex">
            <Col lg="8">
              <p>{fea}</p>
            </Col>
            <Col lg="4">
              <p>$ {price}</p>
            </Col>
          </div>
        </Col>
        <Col lg="4">
          <div className="hoptions">
            <Button
              className="option_btns btn btn-success"
              onClick={handleUpdate}
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </Button>

            <Button
              className="option_btns btn btn-danger"
              onClick={handleDelete}
            >
              <i class="fa-solid fa-trash"></i>
            </Button>
            <Link to={`/admin/viewtour/${_id}`}>
              <Button className="option_btns btn btn-primary">
                <i class="fa-solid fa-eye"></i>
              </Button>
            </Link>
          </div>
        </Col>
      </div>
    </div>
  )
}

export default TourBar