import React, {useState,useContext} from 'react'
import {Container, Row,Col,Form,FormGroup,Button} from 'react-bootstrap'
import{Link,useNavigate} from 'react-router-dom';
import '../Styles/login.css';

import loginImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png'

import {BASE_URL} from '../Utils/config'
import {AuthContext} from '../context/AuthContext'

function Register() {
  const [credentials, setCredentials]=useState({
    email:undefined,
    fullname:undefined,

    password:undefined,
    telephone:undefined,
    country:undefined,

});

const {dispatch}=useContext(AuthContext);
const navigate = useNavigate()

  const handleChange = e =>{
    setCredentials(Prev=>({...Prev,[e.target.id]:e.target.value}))
};
const handleClick= async e=>{
  e.preventDefault();
  try {

    const res = await fetch(`${BASE_URL}/auth/register`,{
      method:'POST',
      mode:'cors',
      headers:{
        'content-type':'application/json'
      },
      
      body:JSON.stringify(credentials)
    });
    const result=await res.json()

    if(!res.ok) alert(result.message)
      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
    
  } catch (err) {
    alert(err.message)
  }
}
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto' data-aos="zoom-in" data-aos-duration='2000'>
              <div className="login_container d-flex justify-content-between">
                <div className="login_img">
                  <img src={loginImg} alt="" />
                </div>
                <div className="login_form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Register</h2>
                  <Form className='mb-2'onSubmit={handleClick} >
                    <FormGroup className='mb-2'>
                      <input 
                      type="email" 
                      placeholder='Email' 
                      required 
                      id='email' 
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='mb-2'>
                      <input 
                      type="text" 
                      placeholder='Full Name' 
                      required 
                      id='fullname' 
                      onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='mb-2'>
                      <input 
                      type="text" 
                      placeholder='Country' 
                      required 
                      id='country' 
                      onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='mb-2'>
                      <input 
                      type="password" placeholder='Password' 
                      required 
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                       title="Password must contain at least 8 characters."
                      id='password' 
                      onChange={handleChange} />
                    </FormGroup>

                    
                    <FormGroup className='mb-2'>
                      <input 
                      type="tel" placeholder='Telephone Number' 
                      required 
                      id='telephone' 
                      pattern="[0-9]{10}"
                      onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>Register</Button>
                  </Form>
                  <p>Do you have an account? <Link to='/login'>Login</Link></p>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register