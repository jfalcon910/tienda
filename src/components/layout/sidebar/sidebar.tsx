import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaTruck } from "react-icons/fa";
import {Sidebar} from "./index";

const ComponentSidebar = () => {

  return (
    <Sidebar>
      <ul className='listMenu'>
        <li>
          <FaHome />
          <Link to='/products'> Productos </Link>
          {/* <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/products'> Productos </NavLink> */}
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