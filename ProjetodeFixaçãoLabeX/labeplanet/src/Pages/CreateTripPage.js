import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const CreateTripPage = () => {
    let navigate=useNavigate();
    const[name,SetName]=useState("")
    const[planeta,SetPlaneta]=useState("")
    const[descricao,setDescricao]=useState("")
    const[duracao,setDuracao]=useState("")
    const[date,setDate]=useState("")

     const mudarNome=(event)=>{
        SetName(event.target.value)
    }
     const mudarPlaneta=(event)=>{
      SetPlaneta(event.target.value)
     }
     const mudarDescricao=(event)=>{
        setDescricao(event.target.value)
    }
     const mudarDuracao=(event)=>{
        setDuracao(event.target.value)
    }
     const mudardata=(event)=>{
        setDate(event.target.value)
     }
    
     const criarViagem=()=>{
        const body={
            name:name,
            planet:planeta,
            date:date,
            description:descricao,
            durationInDays:duracao
        }
        axios.post
        ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips",body,{
            headers:{
                auth:window.localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log("sucesso")
            navigate("/TripDetailsPage")
        })
       
     }
     
    
    
     
     
     

    const handleClick =(e)=>{
     e.preventDefault()                
     criarViagem()
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <h2>Criar Viagem</h2>
            <div><input  type="texto" placeholder="Nome" onChange={mudarNome} value={name}></input></div>
           
            <select name="Planetas" onChange={mudarPlaneta} value={planeta} >
                <option value="">Escolha um Planeta</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Vênus">Vênus</option>
                <option value="Terra">Terra</option>
                <option value="Marte">Marte</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
                <option value="Plutão">Plutão</option>
                
            

            </select>
                <div><input type="texto" placeholder="Descrição" onChange={mudarDescricao} value={descricao}></input></div>
                <div><input type="texto "placeholder="Duração De Dias" onChange={mudarDuracao} value={duracao}></input></div>
                <div><input type="texto" placeholder="data" onChange={mudardata} value={date}></input></div>
            <button type={"submit"}>Criar</button>
            <button onClick={()=>navigate("/AdminHomePage")}>Voltar</button>
        </form>
        </div> 
    )
}
export default CreateTripPage