import React , {useRef,useEffect, useContext} from 'react'
import './header.css'


import {Container,  Button, Nav, Navbar} from 'react-bootstrap'
import {Link, NavLink,useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import Logo from '../../assets/images/TLogo.png'

const nav_link=[
  {
    path:'/home', display:'Home'
  },
  {
    path:'/about', display:'About'
  },
  {
    path:'/tour', display:'Tours'
  },
  {
    path:'/destinations',display:'Destinations'
  }
]


function Header() {


  const headerRef=useRef(null)
  const navigate=useNavigate()
  const {user,dispatch}=useContext(AuthContext)

  const logout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

const stickyHeaderFunc=()=>{



  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
      headerRef.current.classList.add('sticky_header')
    }
    else{
      headerRef.current.classList.remove('sticky_header')

    }
  })
}

useEffect(()=>{
  stickyHeaderFunc()
  return window.removeEventListener('scroll',stickyHeaderFunc)
})
  return (
    <header className='header' ref={headerRef}>
    <Container>
      <Navbar  className=' d-flex align-items-center gap-5 '>
    
      <Navbar.Brand>
        <img src={Logo} alt="" className='logo' />
      </Navbar.Brand>
          <Nav className="menu me-auto nav_items gap-4 mt-2">
            {nav_link.map((item,index)=>(<NavLink key={index} to={item.path} 
           className={navClass=>navClass.isActive?"active_link":""} >{item.display}</NavLink>))}
          </Nav>


          
          <div className="nav_btns d-flex gap-2 align-item-center">

              {
                user?(<>
                <h5 className='mt-2 user-name'>{user.fullname}</h5>
                <Link to={`/yourBooking/${user._id}`}><Button className='btn book_btn' >Your Bookings</Button></Link>

                <Button className='btn btn-dark  logout_btn' onClick={logout}>Logout</Button>
                </>):(
                  <>
                  <Link to='/login'><Button className='login_btn' >Login</Button></Link>
                  <Link to='/register'><Button className='btn reg_btn'>Register</Button></Link>
                  </>
                )
              }

         
          <span className='mobile_menu'>
          <i class="fa-solid fa-bars"></i>
          </span>
          </div>
          
     
      </Navbar>
    </Container> 
    </header>
  )
}

export default Header