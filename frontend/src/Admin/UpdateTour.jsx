import React, { useState } from "react";
import "./Styles/updatetour.css";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utils/config";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  ListGroup,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateTour = () => {
  const { id } = useParams();
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const {
    _id,
    photo,
    title,
    mode,
    desc,
    price,
    nights,

    days,
    distance,
    maxGroupSize,
  } = tour;

  const [credentials, setCredentials] = useState({
    desc: undefined,
    price: undefined,
    nights: undefined,
    days: undefined,
    maxGroupSize: undefined,
    distance: undefined,
  });

  const handleChange = (e) => {
    setCredentials((Prev) => ({ ...Prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {

        const res = await fetch(`${BASE_URL}/tours/${_id}`,{
          method:'PUT',
          mode:'cors',
          headers:{
            'content-type':'application/json'
          },
          
          body:JSON.stringify(credentials)
        });
        const result=await res.json()
        if(res.ok){
            return alert (result.message);
        }
      } catch (err) {
        alert(err.message)
      }
  };
  return (
    <div>
      {loading && <h4 className="text-center pt-5">Loading.....</h4>}
      {error && <h4 className="text-center pt-5">{error}</h4>}
      {!loading && !error && (
        <div className="tour_Update_form">
          <Form onSubmit={handleClick}>
            <Row>
              <Col lg="6">
                <div className="update_photo">
                  <h2>Update Tour</h2>
                  <img src={photo} alt="" />
                </div>
                <h4>Title</h4>
                <h2>{title}</h2>
                <div className="update_mode">
                  <h4>Mode</h4>
                  <p>{mode}</p>
                </div>
                <Button className="btn update_btn" type="submit">
                  Update
                </Button>
              </Col>
              <Col lg="6">
                <div className="update_daynight d-flex gap-5">
                  <FormGroup className="mb-2">
                    <h4>Days</h4>
                    <input
                      type="number"
                      placeholder={days}
                      
                       
                      id="days"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2">
                    <h4>Nights</h4>
                    <input
                      type="number"
                      
                      placeholder={nights}
                      
                      id="nights"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="update_distance_mode d-flex gap-5">
                  <FormGroup className="mb-2">
                    <h4>Distance</h4>
                    <input
                      type="number"
                      placeholder={distance}
                      
                      id="distance"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                <div className="update_price_grpsize d-flex gap-5">
                  <FormGroup className="mb-2">
                    <h4>Price $</h4>
                    <input
                      type="number"
                      placeholder={price}
                      
                      id="price"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2">
                    <h4>Max Group Size</h4>
                    <input
                      type="number"
                      placeholder={maxGroupSize}
                      
                      id="maxGroupSize"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <FormGroup className="mb-2">
                  <h4>Discription</h4>
                  <textarea
                    id="desc"
                    name="desc"
                    rows="8"
                    cols="53"
                    placeholder={desc}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </div>
  );
};

export default UpdateTour;
