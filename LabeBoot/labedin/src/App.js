import React from "react";
import axios from "axios";

const urlLabeusers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "galileo-guilherme-hooks"
  }
};

class App extends React.Component {
  state = {
    usuario: [],
    usuarioInput: "",
    emailInput: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(urlLabeusers, headers)
      .then((res) => {
        this.setState({ usuario: res.data });
      })
      .catch((err) => {
        alert("Algo deu errado, tente novamente");
      });
  };
  
  createUsers = () => {
    const body = {
      name: this.state.usuarioInput,
      email: this.state.emailInput
    };

    axios
      .post(urlLabeusers, body, headers)
      .then((res) => {
        alert(`O usuário ${this.state.usuarioInput} foi criado com sucesso`);
        this.setState({ usuarioInput: "" });
        
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ usuarioInput: "" });
      });
  };
   deleteUser=(id)=>{
     axios
     .delete(`${urlApi}/${id}`,headers)
     .then((res)=>{
       alert('Usuario deletado')
      })
      .cath((err)=>{
        alerta('Algo deu errado')
      })
   }
  

  onCreateUsersTextChange = (event) => {
    this.setState({ usuarioInput: event.target.value });
  };

  onCreateEmailTextChange = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  render() {
    const usersRender=this.state.usersRender.map((user)=>{
      return (
        <>
        <li key={user.id}>
          {user.name}
        </li>
        <button onClick={()=>this.deleteUser(user.id)}>x</button>
        </>
      )
    })
    
    
    const usuarioComponents = this.state.usuario.map((list) => {
      return <li key={list.id}>{list.name}</li>;
    });

    return (
      <div className="App">
        <h1>BD Users</h1>
        <input
          defaultValue={this.state.usuarioInput}
          onChange={this.onCreateUsersTextChange}
          placeholder="Usuário"
        />
        <input
          defaultValue={this.state.emailInput}
          onChange={this.onCreateEmailTextChange}
          placeholder="Email"
          />
          
        <button onClick={this.createUsers}>Adicionar Users</button>
        {usuarioComponents}
        

      </div>
    );
  }
}

export default App;