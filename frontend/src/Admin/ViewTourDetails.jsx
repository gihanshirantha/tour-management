import React from "react";
import "./Styles/viewtour.css";
import { Container, Row, Col, Form, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import calculateAvgRating from "../Utils/avgRating";
import avatr from "../assets/images/avatar.jpg";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utils/config";

const ViewTourDetails = () => {
  const { id } = useParams();
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const {
    photo,
    title,
    desc,
    price,
    nights,
    reviews,
    days,
    distance,
    maxGroupSize,
  } = tour;
  
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //Date format
  const options = { day: "numeric", month: "long", year: "numeric" };

  const deleteReview=(_id)=>async (e)=>{
        console.log(_id)
  }

  return (
    <div className="tvandreviews">
      {loading && <h4 className="text-center pt-5">Loading.....</h4>}
      {error && <h4 className="text-center pt-5">{error}</h4>}
      {!loading && !error && (
        <Row>
          <Col lg="8">
            <div className="atour_content">
              <div className="at_img d-flex">
                <img src={photo} alt="" />
                <div className="at_update_btn">
                  <Link>
                    <Button>
                      <i class="fa-solid fa-pen-to-square"></i> Update Tour
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="atour_info">
                <h1>{title}</h1>

                <div className="at_info d-flex align-items-center gap-5 ">
                  <span>
                    <i
                      class="fa-solid fa-circle-dot"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {nights} Nights
                  </span>
                  <span>
                    <i
                      class="fa-solid fa-calendar-days"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {days} Days
                  </span>
                </div>

                <div className="atourextra-details">
                  <span>
                    <i class="fa-solid fa-dollar-sign"></i>${price} /per Person
                  </span>
                  <span>
                    <i class="fa-sharp fa-solid fa-map-location-dot"></i>$
                    {distance} k/m
                  </span>
                  <span>
                    <i class="fa-solid fa-user-group"></i>
                    {maxGroupSize} People
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <ListGroup className="auser_reviews">
              {reviews?.map((review) => (
                <div className="all_review">
                  <div className="review_item">
                    <img src={avatr} alt="" />
                    <div className="w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h5>{review.username}</h5>
                          <p>
                            {new Date(review.createdAt).toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </p>
                        </div>

                        <span className="d-flex align-items-center">
                          <span className="gap-2">
                            {review.rating} <i class="fa-solid fa-star"></i>
                          </span>
                        </span>
                      </div>
                      <h6>{review.reviewText}</h6>
                    </div>
                  </div>
                  <Button onClick={deleteReview(review._id)}>
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </div>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ViewTourDetails;
