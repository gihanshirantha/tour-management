import React,{useState, useContext} from 'react'
import '../Admin/Styles/Adminlogin.css'
import{Link, useNavigate} from 'react-router-dom';
import {BASE_URL} from '../Utils/config'
import {AuthContext} from '../context/AuthContext'


function AdminLogin() {
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
    if(!res.ok)
    alert(result.message)

    else{
    console.log(result.data)

    dispatch({type:'LOGIN_SUCCESS',payload:result.data});
    navigate("/admin/dashboard");}
    
  } catch (err) {
    dispatch({type:'LOGIN_FAILURE',payload:err.message});
  }


}





  return (
    <section>
          <form class="adminlogin" onSubmit={handleClick}>
      <input type="text" placeholder="Username" required 
                      id='email' 
                      onChange={handleChange}/>
      <input type="password" placeholder="Password" required 
                      id='password' 
                      onChange={handleChange}/>
      <button type='submit'>Login</button>
    </form>

    <a className='admina' href="https://codepen.io/davinci/" target="_blank">check my other pens</a>
    </section>
    
    
  )
}

export default AdminLogin