import { useState } from 'react'
import './App.css'
import Navigation from './assets/Components/Navigation/Navigation'
import Login from './src./assets/Pages/Login'
import Orders from './Pages/Orders'
import Products from './Pages/Products'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const isauthenticated = false
return(
  <Router>
   <Navigation />
    <Routes>
      <Route path="/Products" element={<Products />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </Router>

  
)

}



export default App
