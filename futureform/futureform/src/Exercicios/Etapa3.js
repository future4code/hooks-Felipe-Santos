import React from 'react'
import { Container } from './styled'

export class Etapa3 extends React.Component {
    render () {
        return (
            <Container>
                <h1> Etapa3 - Informações Gerais De Ensino</h1>
                  <cinco>5. Por que você não terminou um curso de  graduação ?</cinco>
                  <input type="search" placeholder="Buscar"/>
                
                <h1>6. você Fez algum curso complementar ? </h1>
                        <select name="Escolha">
                         <option>English </option>
                         <option>Curso Tecnico </option>
                         <option> Outros </option>
                         </select>
            </Container>
        )
    }
}