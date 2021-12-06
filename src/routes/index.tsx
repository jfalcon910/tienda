import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/login/index';
import Products from '../pages/products/products';


const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </Router>
  )
}

export default app