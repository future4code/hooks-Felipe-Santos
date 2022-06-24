import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'





const TripDetailsPage = () => {
  const [showTrip, setShowTrip] = useState([])
  let navigate = useNavigate();

  const getTrip = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips")
      .then((res) => {
        console.log(res.data.trip)
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



  const renderizar = showTrip.map(trip => {
    return <div key={trip.id}>
      <h2>{trip.name}</h2>
      <p> Descrição: {trip.description}</p>
      <p>Local: {trip.planet}</p>
      <p>Duração: {trip.durationInDays}</p>
      <p>Data: {trip.date}</p>
      
    </div>
    
  })

  return (


    <div>
      <div> <h2>Detalhes Da Viagem </h2></div>
      {renderizar}
      <button onClick={() => navigate("/LoginPage")}>Voltar</button>
      <button onClick={() => navigate("/CreateTripPage")}>Criar Viagem</button>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  )
}
export default TripDetailsPage