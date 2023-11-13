import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'

import Home from './../Pages/Home';
import Tour from './../Pages/Tour';
import TourDetails from './../Pages/TourDetails';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import SearchResult from './../Pages/SearchResult';
import ThankYou from '../Pages/ThankYou';
import RazorpayButton from '../Pages/RazorpayButton';
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tour/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/pay' element={<RazorpayButton/>}/>
        <Route path='/tours/search' element={<SearchResult/>}/>
    </Routes>
  )
}

export default Routers