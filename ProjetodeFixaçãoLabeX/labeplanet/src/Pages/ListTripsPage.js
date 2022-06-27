import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import styled from "styled-components";

const ContainerPai=styled.div`
text-align: center;
`


const ListTripsPage = () => {
    let navigate = useNavigate();
    const [lista, setLista] = useState([])



    const mostraviagem = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips")
            .then((res) => {
                setLista(res.data.trips)
            }).catch((erro) => {
                console.log("erro")
            })
    }

    useEffect(() => {
        mostraviagem();
    }, [])


    const renderizar = lista.map((viagem) => {
        return <div key={viagem.id}><h2>{viagem.name}</h2>
            <div> <button onClick={() => navigate("/ApplicationFormPage")}>Inscrever-se</button></div>
        </div>


    })

    return (
        <ContainerPai>

            <div> <button onClick={() => navigate("/")}> Voltar</button></div>

           <div> {renderizar} </div>

        </ContainerPai>
    )
}
export default ListTripsPage