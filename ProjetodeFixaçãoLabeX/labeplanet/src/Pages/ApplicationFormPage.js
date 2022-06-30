import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'



const ApplicationFormPage = () => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [texto, setTexto] = useState("")
    const [profissao, setProfissão] = useState("")
    const [pais, setPais] = useState([])


    const mudarNome = (event) => {
        setNome(event.target.value)
    }
    const mudarIdade = (event) => {
        setIdade(event.target.value)
    }
    const mudarTexto = (event) => {
        setTexto(event.target.value)
    }
    const mudarProfissao = (event) => {
        setProfissão(event.target.value)
    }
    const mudarPais = (event) => {
        setPais(event.target.value)
    }



    let navigate = useNavigate();
    const [countries, setCountries] = useState([]);

    const getCountries = () => {
        axios
            .get("https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome")
            .then((res) =>
                setCountries(res.data))

    }
    useEffect(() => {
        getCountries();
    }, [])

    const criarCadastro = () => {
        const body = {
            name: nome,
            age: idade,
            applicationText: texto,
            profession: profissao,
            country: pais

        }
        axios.post
            (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips/id/apply`, body, {

            }).then((res) => {
                alert("Cadastrado Com Sucesso")
                // navigate("/ListTripsPage")
                console.log(res)



            })

    }





    return (
        <div >
            <div><h1>Inscrever-se Para Uma Viagem</h1></div>

            <div><input type="texto" placeholder="Nome" onChange={mudarNome}></input></div>
            <div><input type="texto" placeholder="Idade" onChange={mudarIdade}></input></div>
            <div><input type="texto" placeholder="Texto De Candidatura" onChange={mudarTexto}></input></div>
            <div><input type="texto" placeholder="Profissão" onChange={mudarProfissao}></input></div>
            <div>
                <select>
                    {countries.map((country, index) => {
                        return (
                            <option key={index} value={country.nome} onChange={mudarPais}>{country.nome}</option>
                        )
                    })}
                </select>
            </div>
            <div><button onClick={() => criarCadastro("/ListTripsPage")}>Enviar</button></div>
            <div> <button onClick={() => navigate("/ListTripsPage")} >Voltar</button></div>

        </div>
    )
}
export default ApplicationFormPage