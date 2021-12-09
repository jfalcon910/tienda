import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaTruck } from "react-icons/fa";
import {Sidebar} from "./index"
const ComponentSidebar = () => {

  return (
    <Sidebar>
      <ul>
        <li>
          <FaHome />
          <Link to='/products'> Productos </Link>
        </li>
        <li>
          <FaTruck />
          <Link to='/supplier'>  Proveedor </Link>
        </li>
      </ul>
    </Sidebar>
  )
}

export default ComponentSidebar