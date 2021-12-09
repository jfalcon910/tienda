import React, { useEffect } from 'react'
import { Logout } from '../../../utils/Session';
import { loginApi } from '../../../services/loginApi';
import { LoginRequest } from '../../../interface/loginInterface/login.interface';
import jwtDecode from 'jwt-decode';

 const Security = (props:any) => {
     useEffect(() => {
         verify();
     }, [])
     const verify = async() =>{
        const token = localStorage.getItem('token');
        if(token === null || token === ''){
            Logout()
        }else{
            try {
                const {data} = await loginApi.post<LoginRequest>('/verify-auth', {token});
                if(!data.status){
                    Logout();
                }else{
                    jwtDecode(token)
                }
            } catch (error) {
                Logout();
            }
        }
     }
    return (
        <>
            {props.children}
        </>
    )
}

export default Security