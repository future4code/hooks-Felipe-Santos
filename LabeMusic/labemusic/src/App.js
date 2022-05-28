import logo from './logo.svg';
import './App.css';
import React from 'react';
import CreatePlaylist from './Esqueci/createPlaylist';
import SearchPLaylist from './Esqueci/SearchPLaylist';
import adicionarmusica from './Esqueci/adicionarmusica';

class App  extends React.Component{
  state={
    telaInicial:"cadastro",
  }
  
  irParaCadastro=()=>{
    this.setState({telaInicial : "cadastro"})
  }
  irParaLista=()=>{
    this.setState({telaInicial: "lista"})
  }

  escolheTela=()=>{
    switch (this.state.telaInicial){
      case  "cadastro" :
        return <CreatePlaylist irParaLista={this.irParaLista}/>
      case "lista":
        return <SearchPLaylist irParaCadastro={this.irParaCadastro}/>
        default:
          return <p>Erro! Página não encontrada </p>
    }

  }


  render () {
    return ( 
      <div> 
        {this.escolheTela()}
      </div>
    )
  }
}

export default App;
