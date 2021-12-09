import React, { useEffect, useState } from 'react'
import './style.css'
import Logo from '../../../images/logo.png'
import { Logout } from '../../../utils/Session'

const Header = () => {
    const [UserData, SetUserData] = useState<any>({})
    useEffect(() => {
        const userData:any = localStorage.getItem('userData');
        console.log(userData);
        const parsed = JSON.parse(userData);
        ;
        SetUserData(parsed);
        
    }, [])
    return (
        <div className="containerHeader">
            <div className="columnHeader">
                <img src={Logo} alt="" />
            </div>
            <div className="columnHeader">
                <p>Hola {UserData.name} </p>
                <button onClick={Logout} >Cerrar sesión</button>
            </div>
        </div>
    )
}

export default Header