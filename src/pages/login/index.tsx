import React, { useState } from 'react'
import './style.css'
import { LoginInterface, LoginRequest, LoginRes } from '../../interface/loginInterface/login.interface';
import { loginApi } from '../../services/loginApi';
const Login = () => {
    const initialDAta = {
        email: '',
        password: '',
    }
    const [form, setForm] = useState<LoginInterface>(initialDAta);

    const changeInput = (event:any) =>{
        const name = event.target.name;
        const value = event.target.value;
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitForm = async(event:any) =>{
        event.preventDefault();
        try {
            const {data} = await loginApi.post<LoginRes>('/auth-login', form);
            const {status} = data;
            const result:LoginRequest = data.result;
            if(status){
                const {token, userData} = result;
                localStorage.setItem('token', token);
                localStorage.setItem('userData', JSON.stringify(userData));
                window.location.href= '/'
            }
            
        } catch (error:any) {
            alert(error.response.data.message)
        }
    }
    return (
        <div className="containerLogin">
            <form onSubmit={submitForm}  className="boxLogin">
                <img src="https://scontent.flim1-1.fna.fbcdn.net/v/t39.30808-6/260351093_104582818726660_8939183109455574015_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHnNOZVc6XhBBMK8FZZ9JjU2yBSAY-d6rfbIFIBj53qt6MeE7ojN8Nhyl49YyKWrfP8e3qTQh_L3FFyDMhI3fcP&_nc_ohc=tJpN9i1FGf0AX-azQER&_nc_ht=scontent.flim1-1.fna&oh=7953ae9eeaeb8f1f77359890367a3f6d&oe=61BA7915" alt="" />
                <h3>Loginsssssssss</h3>
                <div className="rowLogin">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        onChange={changeInput}
                        />
                </div>
                <div className="rowLogin">
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password" 
                        onChange={changeInput}
                        />
                </div>
                <div className="rowLogin">
                    <button type="submit">Ingresar</button>
                </div>
            </form>
        </div>
            
            
        
    )
}

export default Login