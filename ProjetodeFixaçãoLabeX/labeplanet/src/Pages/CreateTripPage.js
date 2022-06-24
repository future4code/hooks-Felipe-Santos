import React from "react"
import { useNavigate } from 'react-router-dom'


const CreateTripPage = () => {
    let navigate=useNavigate();
    return (
        <div>
            <div><h2>Criar Viagem</h2></div> 
            <div><input  type="texto" placeholder="Nome"></input></div>
           
            <select name="Planetas">
                <option value="">Escolha um Planeta</option>
                <option value="">Mercúrio</option>
                <option value="">Vênus</option>
                <option value="">Terra</option>
                <option value="">Marte</option>
                <option value="">Jupiter</option>
                <option value="">Saturno</option>
                <option value="">Urano</option>
                <option value="">Netuno</option>
                <option value="">Plutão</option>
                
            

            </select>
                <div><input type="texto" placeholder="Descrição"></input></div>
                <div><input type="texto "placeholder="Duração De Dias"></input></div>
            <button>Criar</button>
            <button onClick={()=>navigate("/AdminHomePage")}>Voltar</button>
        </div>
    )
}
export default CreateTripPage