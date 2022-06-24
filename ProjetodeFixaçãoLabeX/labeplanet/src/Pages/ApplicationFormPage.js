import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'



const ApplicationFormPage = () => {
    let navigate=useNavigate();
    const[countries,setCountries]=useState([]);
    const getCountries=()=>{
        axios
        .get("https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome")
        .then((res)=>
        setCountries(res.data))
    }
       useEffect(()=>{
        getCountries();
       },[])
       

    return (
        <div>
             <div><h1>Inscrever-se Para Uma Viagem</h1></div>
             <div><input type="texto" placeholder="Nome"></input></div>
             <div><input type="texto" placeholder="Idade"></input></div>
             <div><input type="texto" placeholder="Texto De Candidatura"></input></div>
             <div><input type="texto" placeholder="Profissão"></input></div>
             <div>
             <select>
                {countries.map((country,index)=>{
                    return(
                        <option key={index} value={country.nome}>{country.nome}</option>
                    )
                })}
             </select>
             </div>
             <div><button>Enviar</button></div>
             <div> <button onClick={()=>navigate("/")} >Voltar</button></div>
             
        </div>
    )
}
export default ApplicationFormPage