import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FaHome, FaTruck } from "react-icons/fa";

const ComponentSidebar = () => {

  return (
    <div className="sidebar">
      <ul>
        <li>
          <FaHome />
          <Link to='/'> Productos </Link>
        </li>
        <li>
          <FaTruck />
          <Link to='/supplier'>  Proveedor </Link>
        </li>
      </ul>
    </div>
  )
}

export default ComponentSidebar