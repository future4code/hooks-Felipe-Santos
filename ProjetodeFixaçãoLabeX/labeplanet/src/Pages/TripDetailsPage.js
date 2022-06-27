import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const CaixaPai=styled.div`
display:grid;
justify-content: center;
justify-content: space-evenly;
align-items: center;
align-items: center;

`
const CaixaFilho=styled.div`
 border-style: dotted solid;
 text-align: center;
`

const Titulo=styled.div`
text-align: center;
`

const TripDetailsPage = () => {

  const [showTrip, setShowTrip] = useState([])
  let navigate = useNavigate();

  const getTrip = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips")
      .then((res) => {
        setShowTrip(res.data.trips)
      })

  }
  useEffect(() => {
    getTrip();
  }, [])




  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      navigate("/LoginPage")

    }

  }, [navigate])

  const Deletar = (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips/${id}`
    const headers = {
      headers: {
        auth: window.localStorage.getItem("token")
      }
    }
    axios.delete(URL, headers)
      .then(resp => {
        alert("deletado")
        console.log(resp)
      })

  }

  const renderizar = showTrip.map(trip => {
    return <div key={trip.id}>
      <h2>{trip.name}</h2>
      <p> Descrição: {trip.description}</p>
      <p>Local: {trip.planet}</p>
      <p>Duração: {trip.durationInDays}</p>
      <p>Data: {trip.date}</p>
      <button onClick={() => navigate(`/AprovandoCandidato/${trip.id}`)}>Candidatos</button>
      <button onClick={() => Deletar(trip.id)}>Deletar</button>

    </div>

  })


  return (


    <CaixaPai>
      <Titulo> <h2>Detalhes Da Viagem </h2></Titulo>
       <CaixaFilho>{renderizar}</CaixaFilho>
      <button onClick={() => navigate("/LoginPage")}>Voltar</button>
      <button onClick={() => navigate("/CreateTripPage")}>Criar Viagem</button>
      <button onClick={() => navigate("/")}>Logout</button>
    </CaixaPai>
  )
}
export default TripDetailsPage