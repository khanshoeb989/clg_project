import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Aboutus from '../pages/Aboutus'
import Foodblog from '../pages/Foodblog'
import Contactus from '../pages/Contactus'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import FoodServiceListing from '../pages/FoodServiceListing'
import MealSummaryForm from '../pages/MealSummaryForm'
import LoginDabba from '../pages/LoginDabba'
import SignupDabba from '../pages/SignupDabba'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<Aboutus/> }></Route>
            <Route path='/foodblog' element={<Foodblog/>}></Route>
            <Route path='/contactus' element={<Contactus/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/foodservicelisting' element={<FoodServiceListing/>}></Route>
            <Route path='/mealsummary' element={<MealSummaryForm/>}></Route>
            <Route path='/logindabba' element={<LoginDabba/>}></Route>
            <Route path='/signupdabba' element={<SignupDabba/>}></Route>
            
        </Routes>
    </div>
  )
}

export default Routing