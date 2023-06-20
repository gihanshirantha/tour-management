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
import AdminLogin from '../Admin/AdminLogin';


function Routers() {
  return (
    <Routes>
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


    </Routes>
  )
}

export default Routers