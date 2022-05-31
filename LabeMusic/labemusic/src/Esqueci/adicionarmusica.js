import React from "react"
import axios from "axios"

class AdicionarMusica extends React.Component {
    state={
        nome:"",
        link:"",
        autor:""
    }
   sendNome=(event)=>{
       this.setState({nome:event.target.value})
   }
   sendUrl=(event)=>{
       this.setState({link:event.target.value})
   }
   sendAutor=(event)=>{
       this.setState({autor:event.target.value})
   }
   
  enviarMinhaMusicaNaPlaylist=(id)=>{
      const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

      const headers={
        headers:{
            Authorization : "Felipe-Oliveira-hooks"
        }
      }
      const body={
          name: this.state.nome,
          artist: this.state.autor,
          url: this.state.link
          
      }
      axios.post(url,body,headers)
      .then((respons)=>{
          alert("sucesso") 
          this.props.mostrarMusica()
      })
      .catch((erro)=>{
          alert("erro Tente de Novo")
      })
         
         
  }





    render () {
         
        return (
            <div>

             <input placeholder="url"
             value={this.state.link}
             onChange={this.sendUrl} 
             />

             <input placeholder="Nome Da Musica" 
             value={this.state.nome}
             onChange={this.sendNome}
             />

             <input placeholder="Autor"
             value={this.state.autor}
             onChange={this.sendAutor} 
             />
              
              <button  onClick={()=>this.enviarMinhaMusicaNaPlaylist(this.props.idDessaPlayerList)}>Enviar</button>
            </div>

        )
    };
}
export default AdicionarMusica