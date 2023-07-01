import React from 'react'
import {Link, NavLink,useNavigate} from 'react-router-dom'
import {Container,  Button, Nav, Navbar} from 'react-bootstrap'

import './leftNavigation.css'
import Logo from '../../../assets/images/TLogo.png'

const LeftNavigation = () => {
  return (
    <div>
        <div className="slidebar">
            <div className="sb_top">
                <img src={Logo} alt="" />
            </div>
            <div className="sb_center">
                <ul>
                    <li>
                        <Link to={'/admin/dashboard'}>
                        <div className="list_item d-flex mb-3">
                            <div className="sb_icon">
                            <i class="fa-solid fa-gauge"></i>
                            Dashboard
                            </div>
                            
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/admin/alltours'}>
                        <div className="list_item d-flex mb-3">
                            <div className="sb_icon">
                            <i class="fa-solid fa-plane"></i>
                            Tours
                            </div>
                            
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/admin/allbooking'}>
                        <div className="list_item d-flex mb-3">
                            <div className="sb_icon">
                            <i class="fa-solid fa-calendar-days"></i>
                            Bookings
                            </div>
                            
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'#'}>
                        <div className="list_item d-flex mb-3">
                            <div className="sb_icon">
                            <i class="fa-solid fa-car"></i>
                            Vahicle
                            </div>
                            
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/admin/webusers'}>
                        <div className="list_item d-flex mb-3">
                            <div className="sb_icon">
                            <i class="fa-solid fa-user"></i>
                            User
                            </div>
                            
                        </div>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to={'/'}>
                        <div className="list_item d-flex sb_logout">
                            <div className="sb_icon">
                            <i class="fa-solid fa-gauge"></i>
                            Log Out
                            </div>
                            
                        </div>
                        </Link>
                    </li>
                    
                </ul>

            </div>
            <div className="sb_bottom"></div>
        </div>
    </div>
  )
}

export default LeftNavigation