import React,{useState, useContext} from 'react'
import {Container, Row,Col,Form,FormGroup,Button} from 'react-bootstrap'
import{Link, useNavigate} from 'react-router-dom';
import '../Styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png'

import {BASE_URL} from '../Utils/config'
import {AuthContext} from '../context/AuthContext'

const Login = ()=> {
  const [credentials, setCredentials]=useState({
    email:undefined,
    password:undefined,

});

const {dispatch}=useContext(AuthContext);
const navigate = useNavigate()

  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
};
const handleClick=async e=>{
  e.preventDefault();
  dispatch({type:'LOGIN_START'});
  console.log(credentials);

  try {
    const res = await fetch(`${BASE_URL}/auth/login`,{
      method:'POST',
      mode:'cors',
      headers:{
        'content-type':'application/json'
      },
      
      body:JSON.stringify(credentials)
    });

    const result=await res.json()
    if(!res.ok)alert(result.message)
    console.log(result.data)

    dispatch({type:'LOGIN_SUCCESS',payload:result.data});
    navigate("/");
    
  } catch (err) {
    dispatch({type:'LOGIN_FAILURE',payload:err.message});
  }


}


  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto' data-aos="zoom-in"data-aos-duration='2000'>
              <div className="login_container d-flex justify-content-between">
                <div className="login_img">
                  <img src={loginImg} alt="" />
                </div>
                <div className="login_form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Login</h2>
                  <Form className='mb-2'onSubmit={handleClick} >
                    <FormGroup className='mb-2'>
                      <input type="email" 
                      placeholder='Email' 
                      required 
                      id='email' 
                      onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='mb-2'>
                      <input 
                      type="password" placeholder='Password' 
                      required 
                      id='password' 
                      onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                  </Form>
                  <p>Don't have an account? <Link to='/register'>Create</Link></p>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login