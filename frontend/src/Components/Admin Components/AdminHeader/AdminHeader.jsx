import React from 'react'
import { Link } from 'react-router-dom'
import './adminHeader.css'

const AdminHeader = () => {
  return (
    <div>
        <div className="admin_header d-flex">
            <div className="ah_wording">
                <h5>Deegayu Tours.lk Admin Dashboard</h5>
            </div>
            <div className="ah_icons d-flex">
                <Link to='/admin/tours' className='ah-icon1'>
                <i class="fa-solid fa-plane"></i>
                </Link>
                <Link to='/admin/login'className='ah-icon1'>
                <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
                <div className="notification d-flex">
                <Link to='/admin/tours'className='ah-icon2'>
                <i class="fa-solid fa-bell"></i>
                </Link>
                <div className="notifi_count">
                    <h5>3</h5>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AdminHeader