import React, { useState, useRef } from "react";
import "./Styles/addnewtour.css";
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

const AddNewTour = () => {
  const titleref = useRef("");
  const base64ref = useRef("");
  const tourmoderef = useRef("");
  const daysref = useRef("");
  const nightref = useRef("");
  const distanceref = useRef("");
  const priceref = useRef("");
  const maxgsixeref = useRef("");
  const descref = useRef("");
  const featuredref = useRef("");

  function encodeImageFileAsURL() {
    var filesSelected = document.getElementById("Imagetest").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];

      var fileReader = new FileReader();

      fileReader.onload = function (fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64

        var newImage = document.createElement("img");
        newImage.src = srcData;
        document.getElementById("photo").value = srcData;
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  // const [credentials, setCredentials] = useState({
  //     title:undefined,
  //     photo:undefined,
  //     mode:undefined,
  //     desc: undefined,
  //     price: undefined,
  //     nights: undefined,
  //     days: undefined,
  //     maxGroupSize: undefined,
  //     distance: undefined,
  //   });

  const handleChange = (e) => {
    //setCredentials((Prev) => ({ ...Prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();

    const title = titleref.current.value;
    const photo = base64ref.current.value;
    const mode = tourmoderef.current.value;
    const days = daysref.current.value;
    const nights = nightref.current.value;
    const distance = distanceref.current.value;
    const price = priceref.current.value;
    const maxGroupSize = maxgsixeref.current.value;
    const desc = descref.current.value;
    const featured = featuredref.current.value;

    const insertObj = {
      title,
      photo,
      mode,
      days,
      nights,
      distance,
      price,
      maxGroupSize,
      desc,
      featured,
    };

    console.log(insertObj);

    try {

        const res = await fetch(`${BASE_URL}/tours`,{
            method:'POST',
            mode:'cors',
           
            headers:{
              'Content-Type': 'application/json'
            },
          
          body:JSON.stringify(insertObj)
        })
    
        const result=await res.json()
        if(res.ok)alert(result.message)
        alert("Tour Submited")
      
        
    } catch (err) {
        alert(err.message);
    }


  };
  return (
    <div>
      <div className="tour_Update_form">
        <Form onSubmit={handleClick}>
          <Row>
            <Col lg="6">
              <h2>Add New Tour</h2>
              <FormGroup className="mb-2">
                <div className="tour_title">
                  <h4>Tour Title</h4>
                  <input
                    type="text"
                    placeholder="Enter Tour Title"
                    id="title"
                    required
                    ref={titleref}
                    onChange={handleChange}
                  />
                </div>
              </FormGroup>

              <div className="tour_image_upload">
                <FormGroup className="mb-2">
                  <h4>Upload Photo</h4>
                  <label className="drop-container">
                    <span class="drop-title">Drop files here</span>
                    <input
                      type="file"
                      required
                      id="Imagetest"
                      onChange={encodeImageFileAsURL}
                    />
                  </label>
                  <div className="base64 mt-2">
                    <textarea
                      rows="1"
                      cols="49"
                      placeholder="Phtot String base64"
                      ref={base64ref}
                      id="photo"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </FormGroup>
              </div>
              <div className="d-flex gap-5">
                <FormGroup className="mb-2">
                  <h4>Tour Mode</h4>
                  <select
                    type="text"
                    required
                    placeholder="Select Tour Mode"
                    id="mode"
                    ref={tourmoderef}
                    onChange={handleChange}
                  >
                    <option value="DayTour">DayTour</option>
                    <option value="RoundTour">RoundTour</option>
                  </select>
                </FormGroup>
                <FormGroup className="mb-2">
                  <h4>Featured Or Not</h4>
                  <select
                    type="text"
                    placeholder="Select Tour Mode"
                    id="mode"
                    ref={featuredref}
                    onChange={handleChange}
                  >
                    <option value="false">false</option>
                    <option value="true">True</option>
                  </select>
                </FormGroup>
              </div>

              <Button className="btn update_btn mt-3" type="submit">
                <i class="fa-solid fa-plus"></i> Add
              </Button>
            </Col>
            <Col lg="6">
              <div className="update_daynight d-flex gap-5">
                <FormGroup className="mb-2">
                  <h4>Days</h4>
                  <input
                    type="number"
                    ref={daysref}
                    placeholder="Number of Days"
                    id="days"
                    required
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2">
                  <h4>Nights</h4>
                  <input
                    type="number"
                    required
                    ref={nightref}
                    placeholder="Number of Nights"
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
                    ref={distanceref}
                    placeholder="Distance"
                    required
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
                    placeholder="Price"
                    required
                    ref={priceref}
                    id="price"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="mb-2">
                  <h4>Max Group Size</h4>
                  <input
                    type="number"
                    placeholder="Max Group Size"
                    required
                    ref={maxgsixeref}
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
                  required
                  ref={descref}
                  rows="8"
                  cols="53"
                  placeholder="Discription of the tour"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddNewTour;
