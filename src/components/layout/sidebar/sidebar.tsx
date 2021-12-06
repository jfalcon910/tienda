import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const ComponentSidebar = () => {
  return (
    <div className="sidebar">
      <div className="columnSidebar">
          <Link to='/products'>
            <FaHome />
          </Link>
      </div>
      <div className="columnSidebar"></div>
      <div className="columnSidebar"></div>
      <div className="columnSidebar"></div>
      <div className="columnSidebar"></div>
    </div>
  )
}

export default ComponentSidebar