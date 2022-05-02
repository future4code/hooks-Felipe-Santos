import logo from './logo.svg';
import './App.css';
import React from 'react'


export class App extends React.Component{
  state={
    dados:[{Usuario: "",Mensagem: "" }],
    Usuario:"",
    Mensagem:"",
  };
  receberUsuario(event){
    this.setState({Usuario:event.target.value});
  }
  receberMensagem(event){
    this.setState({Mensagem:event.target.value});

  }
  enviaDados(){
    const novosDados=[
      ...this.state.dados,
      {Usuario:this.state.Usuario,Mensagem:this.state.Mensagem},
    ];
    this.setState({dados :novosDados});
  }
 
  
  render() {
    const dadosComponentes=this.state.dados.map((dado)=>{
      return(
        <div>
        <h4>{dado.Usuario}</h4>
        <p>{dado.Mensagem}</p>
        </div>
      )
    }
    )
    return (
    <div className="body">
      
      <div className="Container">
      {dadosComponentes}
      
          <div className="corpinho">
          
               <div className="footer">
               
                <a className="messagem"><input type="text" value={this.state.Usuario} placeholder="Usuario" onChange={(event)=>this.receberUsuario(event)}/></a>
               <input  type="text" value={this.state.Mensagem} placeholder="Mensagem"onChange={(event)=>this.receberMensagem(event) } />
                <button onClick={()=> this.enviaDados()}> <img src="https://cdn-icons-png.flaticon.com/512/126/126412.png" height ="15" width="15" /></button>
                
              
              </div>

        </div>

      </div>
    </div>
    )
    }
}



export default App
