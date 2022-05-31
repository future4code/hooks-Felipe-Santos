import React from "react"
import axios from "axios"
import AdicionarMusica from "./adicionarmusica"
import ReactPlayer from 'react-player'
import styledComponents from "styled-components"

 export 

 class SearchPLaylist extends React.Component{
     state = {
         listaPlayList:[],
         listaMusica:[],
         idSelecionado:""
     }
   
    componentDidMount(){
        this.monstrarPlaylist()
    }
    
    mostrarMusica=(id)=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const headers={
            headers: {
                Authorization : "Felipe-Oliveira-hooks"
            }
        }
       axios.get(url,headers)
       .then((respo)=>{
            this.setState({listaMusica: respo.data.result.tracks,idSelecionado:id}) 
            console.log(respo.data.result.tracks)
           
       })
       .catch((err)=>{
           alert("Algo Deu Errado")
       })
         
       
    }
        
    

   
   monstrarPlaylist=()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        const headers={
            headers: {
                Authorization : "Felipe-Oliveira-hooks"
            }
        }
       axios.get(url,headers)
       .then((respo)=>{
            this.setState({listaPlayList:respo.data.result.list}) 
           
       })
       .catch((err)=>{
           alert("Algo Deu Errado")
       })
         
       
    }
    deletarUsuario=(id)=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        
        const headers={
            headers: {
                Authorization : "Felipe-Oliveira-hooks"
            }
        }
        axios.delete(url,headers)
        .then((response)=>{
            alert("Usuário deletado com sucesso ")
            this.mostrarPlaylis()
            
        })
        .catch((erro)=>{
          alert()  
        })
    }

   
   
   
    render () {
        
        const mostrar= this.state.listaPlayList.map((playlist)=>{
            return <div key={playlist.id}>
                {playlist.name}
                <button onClick={()=>this.deletarUsuario(playlist.id)}>x</button>
                <button onClick={()=>this.mostrarMusica(playlist.id)}>Mostrar Musica</button>
            </div>
            
        })
        const mostrarMusica=this.state.listaMusica.map((musica)=>{
            return <div key={musica.id}>
            {musica.name} - {musica.artist} 
           <audio controls src={musica.url} autoPlay />
           
            </div>
        })

        return (
          <div>
              <button onClick={this.props.irParaCadastro}>Volta Para cadastro</button>
              {mostrar}
               <AdicionarMusica idDessaPlayerList={this.state.idSelecionado}  mostrarMusica={()=>this.mostrarMusica(this.state.idSelecionado)}/>
              {mostrarMusica}
              
          </div>
        )
    }
}

export default SearchPLaylist