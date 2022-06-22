import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"


const LoginPage = () => {
    let navigate=useNavigate();

    const [email,setStateEmail]=useState("")
    const[password,setPassword]=useState("")
    
    const onChangeEmail=(event)=>{
        setStateEmail(event.target.value)
    }
    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }
    
    const onSubmitLogin=()=>{
        const URL="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/login"
        const body={
            email:email,
            password:password
        }
        axios.post(URL,body).then((res)=>{
            localStorage.setItem("token",res.data.token)
            alert("Seja Muito Bem Vindo")
            navigate("/TripDetailsPage")
        }) .catch((erro)=>{
            alert("Erro no Login Porfavor Tente Novamente")
        })
    }

    
    
    return (
        

        <div>
            
            <div><h2>Login</h2></div>
            <div> <input type="Email" placeholder="Email" 
            value={email}
            onChange={onChangeEmail}
            /></div>
            
            <div> <input type="password" placeholder="password"
            value={password}
            onChange={onChangePassword}
            ></input></div>

            <div> <button onClick={onSubmitLogin}>Cadastrar</button></div>
            
            
            <div> <button onClick={()=>navigate("/")}>Voltar </button></div>
        </div>
    )
}
export default LoginPage;