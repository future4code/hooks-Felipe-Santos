import React from 'react'
import { Container } from './styled'

export class Etapa2 extends React.Component{
    render () {
        return (
            <Container>
                <h1>Etapa 2- Informações Do Ensino Superior</h1>
                 <cinco>5. Qual Curso </cinco>
                 <input type="search" placeholder="Buscar"/>

                 <h1>6. Qual a Unidade De Ensino ?</h1>
                 <input type="search" placeholder="Buscar"/>
            </Container>
        )
    }
}