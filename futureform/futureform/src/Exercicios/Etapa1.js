import React from 'react'
import { Container } from './styled'

export class Etapa1 extends React.Component{
    render () {
        return (
            <Container>
            <nome>ETAPA 1 - DADOS GERAIS</nome>
                   
                   <um>1. Qual e o seu Nome ?</um>
                   <input type="search" placeholder="Buscar"/>
                   <dois>2. Qual sua Idade </dois>
                   <input type="search" placeholder="Buscar"/>
                   <tres>3. Qual seu Email ?</tres>
                   <input type="search" placeholder="Buscar"/>
                   <quatro>4. Qual sua escolaridade</quatro>
                     <select name="select">
                         <option>Ensino médio incompleto </option>
                         <option>Ensino médio completo</option>
                         <option> Ensino Superior incompleto</option>
                         <option>Ensino Superior completo</option>
                     </select>
        
            </Container> 
        )
    }
}