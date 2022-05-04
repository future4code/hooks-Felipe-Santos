import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Etapa1 } from './Exercicios/Etapa1';
import { Etapa2 } from './Exercicios/Etapa2';
import { Etapa3 } from './Exercicios/Etapa3';
import { Final } from './Exercicios/Final';
import { Container } from './Exercicios/styled';
 
class App extends React.Component {
  state={
    step:1
  }
  
  nextbutton=()=>{
    this.setState({step: this.state.step +1 });
}

 renderizarEtapas =()=> {
   switch (this.state.step) {
     case 1 :
       return < Etapa1/>
      case 2 :
         return <Etapa2/>
      case 3 : 
       return <Etapa3/>
      case 4 :
      return <Final/>
        default: 
      return <Final/>
   }
 }
    
  render () {
    return (
      <Container>
        {this.renderizarEtapas()}
      <button onClick={(this.nextbutton)}>Proxima Etapa </button>
      </Container>
    )
  }
}

export default App