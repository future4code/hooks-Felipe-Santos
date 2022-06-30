import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const AprovandoDetalhes = () => {
   const[candidatos,setCandidatos]=useState([])
   const[aprovados,setAprovados]=useState([])
   let navigate = useNavigate();
   const pathParams=useParams();
    //  const qualquer nome=useParams quando for chamar no axios {nome.tripId}
   useEffect(() => {
      candidato();
    }, [])

    const candidato=()=>{
      const headers={
         headers:{
            auth:window.localStorage.getItem("token")
         }
      }
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trip/${pathParams.tripId}`,headers) //(pathParams e o caminho .tripId passa id junto)
         .then((res)=>{
         setCandidatos(res.data.trip.candidates)
         
         
      }).catch((erro)=>{
         console.log(erro)
      })

    }
    // escolha(true) é como se fosse bananinha = true 
    // escolha(false) é como se fosse bananinha = false 
   const escolha=(boleano,id)=>{
      const URL=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips/${pathParams.tripId}/candidates/${id}/decide`
      const headers={
         auth:window.localStorage.getItem("token")
      }
     const body={
         aprove:boleano
      }
      axios.put(URL,body,headers).then((res)=>{
         setAprovados("sucesso")
      }).catch((erro)=>{
         alert("tente novamente")
      })
   }
 
   
   
   const pessoa=candidatos.map((escolhido)=>{
      return<div key={escolhido.id}>
         <h2>Nome: {escolhido.name}</h2>
         <p>Idade: {escolhido.age}</p>
         <p>Pais: {escolhido.country}</p>
         <p>Profisson :{escolhido.profession}</p>
         <p>Texto :{escolhido.applicationText}</p>
         <button onClick={()=>escolha(true,escolhido.id)}>Aprovar</button>
         <button onClick={()=>escolha(false,escolhido.id)}>Recusar</button>
      </div>
   })

   

    
   return (
      
      <div>
         <div>{pessoa}</div>
         <div><button onClick={() => navigate("/TripDetailsPage")}>Voltar</button></div>
      </div>
   )
}

export default AprovandoDetalhes