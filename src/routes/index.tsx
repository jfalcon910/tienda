import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/login/index';
import Products from '../pages/products/products';
import Supplier from '../pages/supplier/supplier';


const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/suppliers" element={<Supplier />}/>
        
      </Routes>
    </Router>
  )
}

export default app