import react from 'react'

class Menssagem extends React.Component {
    state={
        inputUsuario:'',
        inputMensagem:''
    }
    mudausuario=(event)=> {
        this.setState({inputUsuario: event.target.value})
    
    }
    mudaMensagem=(event)=>{
        this.setState({inputMensagem: event.target.value})
    }
    AdicionarPessoa=() =>{
        const novaPessoa={
            Usuario: this.state.inputUsuario,
            Mensagem: this.state.inputMensagem
        }
     const novaListaDePessoas =[...this.state.listaDePessoas]
     novaListaDePessoas.push(novaPessoa)
     this.setState({listaDePessoas : novaListaDePessoas})
    } 
    

}