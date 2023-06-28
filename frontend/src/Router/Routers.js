import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../Pages/Home';
import Tours from './../Pages/Tours'
import TourDetails from './../Pages/TourDetails';
import DaytourDetails from '../Pages/DaytourDetails';
import Login from './../Pages/Login';
import SearchResults from './../Pages/SearchResults';
import Register from './../Pages/Register';
import Destinations from './../Pages/Destinations';
import ThankYou from '../Pages/ThankYou';
import About from '../Pages/About';
import YourBookings from '../Pages/yourBookings';

import Payment from '../Pages/Payment';

import Dashboard from '../Admin/Dashboard';
import AdminLogin from '../Admin/AdminLogin';
import AddTours from '../Admin/AddTour'


import AllBookings from '../Components/Admin Components/AdminBookingBar/AllBookings'
import WaitingBookings from '../Components/Admin Components/AdminBookingBar/WaitingBookings'
import FinishedBooking from '../Components/Admin Components/AdminBookingBar/FinishedBokings'
import ConfirmedBooking from '../Components/Admin Components/AdminBookingBar/ConfirmedBookings'
import ViewBooking from '../Admin/ViewBooking';

import AllTours from '../Components/Admin Components/TourManagement/AllTours'
import DayTours from '../Components/Admin Components/TourManagement/DayTours'
import RoundTours from '../Components/Admin Components/TourManagement/RoundTours'
import ViewTourDetails from '../Admin/ViewTourDetails'

import Layout from '../Components/Layout/Layout'
import AdminApp from '../Components/Layout/AdminApp'



function Routers() {
  return (
    <Routes>

      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Navigate to='/home'/>}/>

        

        <Route path='/home' element={<Home/>}/>
        <Route path='/tour' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/daytourDetails/:id' element={<DaytourDetails/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/tours/search' element={<SearchResults/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/yourBooking/:id' element={<YourBookings/>}/>
        <Route path='/payment/:id' element={<Payment/>}/>
        </Route>

        <Route path='/admin/login' element={<AdminLogin/>}/>

        <Route path='/admin' element={<AdminApp/>}>
        <Route path='/admin' element={<Navigate to='/admin/dashboard'/>}/>


          <Route path='/admin/addtour' element={<AddTours/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          
          <Route path='/admin/allbooking' element={<AllBookings/>}/>
          <Route path='/admin/waitingbooking' element={<WaitingBookings/>}/>
          <Route path='/admin/confirmedbooking' element={<ConfirmedBooking/>}/>
          <Route path='/admin/finishedbooking' element={<FinishedBooking/>}/>
          <Route path='/admin/viewbooking/:id' element={<ViewBooking/>}/>

          <Route path='/admin/alltours' element={<AllTours/>}/>
          <Route path='/admin/daytours' element={<DayTours/>}/>
          <Route path='/admin/roundtours' element={<RoundTours/>}/>
          <Route path='/admin/viewtour/:id' element={<ViewTourDetails/>}/>



        </Route>



    </Routes>
  )
}

export default Routers