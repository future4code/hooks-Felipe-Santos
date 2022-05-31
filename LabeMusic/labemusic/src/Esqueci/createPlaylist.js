import React from 'react';
import axios from 'axios'
import adicionarmusica from './adicionarmusica';


class CreatePlaylist extends React.Component {
   state={ 
       createPlaylist:"",
       
   }

   mudançaPlaylist=(event)=>{
       this.setState({createPlaylist:event.target.value})
     
    }
    
   
   fazerCadastroPlaylist=()=>{
       const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
       
       const body={
          name:this.state.createPlaylist
       }
       const headers={
           headers:{
               Authorization:"Felipe-Oliveira-hooks"
           }
       }
       axios.post(url,body,headers)
         .then((respon)=>{
             alert("sucesso")
            

         })
         .catch((err)=>{
            alert("erro")

         })
     }
    
   
   
    render () {
        return (
            
            <div>
                <input placeholder='Nome Playlist'
                value={this.state.createPlaylist}
                onChange={this.mudançaPlaylist}
              />
              
                <button onClick={this.fazerCadastroPlaylist}>Cadastrar</button>
                <button onClick={this.props.irParaLista}>Para ir Proxima Pagina</button>
               
            </div>
        )
    }
}

export default CreatePlaylist