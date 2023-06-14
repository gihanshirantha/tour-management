import React, { useRef } from "react";
import { Col, Form, FormGroup, } from "react-bootstrap";

import "./searchBar.css";

import { BASE_URL } from "../Utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const daysRef = useRef(0);
  const maxGroupRef = useRef(0);

  const navigate = useNavigate();

  const searchHndler = async () => {
    const days = daysRef.current.value;
    const maxGroup = maxGroupRef.current.value;

    if (days === "" || maxGroup === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?days=${days}&maxGroupSize=${maxGroup}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(`/tours/search?days=${days}&maxGroupSize=${maxGroup}`, {
      state: result.data,
    });
  };

  return (
    <div>
      <Col lg="12">
        <div className="search_bar">
          <Form className="d-flex align-items-center gap-4">
            {/*--- Days ---*/}

            <FormGroup className="d-flex gap-3 form_group form_group-fast">
              <span>
                <i class="fa-solid fa-calendar-days"></i>
              </span>

              <div>
                <h6>Days</h6>
                <input type="number" placeholder="Days" ref={daysRef} />
              </div>
            </FormGroup>

            {/*--- Max People ---*/}

            <FormGroup className="d-flex gap-3 form_group form_group-last">
              <span>
                <i class="fa-solid fa-person-chalkboard"></i>
              </span>

              <div>
                <h6>Max People</h6>
                <input type="number" placeholder="0" ref={maxGroupRef} />
              </div>
            </FormGroup>

            
            <span className="search_icon" type="submit" onClick={searchHndler}>
                
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            
          </Form>
        </div>
      </Col>
    </div>
  );
};

export default SearchBar;
