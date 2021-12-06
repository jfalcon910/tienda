import React from 'react'
import './style.css'
import Logo from '../../../images/logo.png'
const Header = () => {
    return (
        <div className="containerHeader">
            <div className="columnHeader">
                <img src={Logo} alt="" />
            </div>
            <div className="columnHeader"></div>
        </div>
    )
}

export default Header