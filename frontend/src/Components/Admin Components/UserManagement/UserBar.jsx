import React from 'react'
import { Col, Row, Button } from "react-bootstrap";
import { BASE_URL } from '../../../Utils/config';



const UserBar = ({user}) => {

    const {_id,email,fullname,telephone,country}=user

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
          const res=await fetch(`${BASE_URL}/users/${_id}`,{
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
    }



  return (
    
    <div>
    <div className="admin_booking_data d-flex">
<Col lg="7">
<div className="htitle d-flex">
            <Col lg="6">
              <p>{email}</p>{" "}
            </Col>
            <Col lg="3">
              <p>{fullname}</p>
            </Col>
            <Col lg="3">
              <p>{country}</p>
            </Col>
          </div>
        </Col>
        <Col lg="2">
          <div className="hstatuses d-flex">
            
              <p>{telephone}</p>
            
          </div>
        </Col>
<Col lg="3">
<div className="hoptions">
  

  <Button
    className="option_btns btn btn-danger"
    onClick={handleDelete}
  >
    <i class="fa-solid fa-trash"></i>
  </Button>
</div>
</Col>
</div>
</div>
  )
}

export default UserBar