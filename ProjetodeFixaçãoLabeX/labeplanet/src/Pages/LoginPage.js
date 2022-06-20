import React from "react"
import { HomesPages } from "../navigate/Rotas";

const LoginPage = () => {
    
    return (
        

        <div>
            <div><h2>Login</h2></div>
            <div> <input type="text" placeholder="Email"></input></div>

            <div> <input type="text" placeholder="Senha" /></div>
            <div> <button>Entrar</button></div>
            <div><button>Voltar </button></div>
        </div>
    )
}
export default LoginPage;