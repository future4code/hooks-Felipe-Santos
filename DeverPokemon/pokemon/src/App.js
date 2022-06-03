import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./Componente/PokerCard/PokerCard";
import styledComponents from "styled-components";

function App () {
  // state = {
  //   // lista de pokemons que está sendo guardada no estado
  //   pokeList: [],
  //   // nome do pokemon guardado no estado, assim que o usuário
  //   // escolhe um nome no dropdown
  //   pokeName: ""
  // };
   const [pokeList,setStatePokelist]=useState([])
   const [pokeName,setStatePokeName]=useState("")
  
  // método que roda após a montagem do componente
  // componentDidMount = () => {
  //   // função axios que está batendo na API e buscando 151 pokemons
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  //     .then(response => {
  //       // função que está setando no estado os 151 pokemons
  //       this.setState({ pokeList: response.data.results });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
 useEffect(()=>{
  axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        
        setStatePokelist(  response.data.results );
      })
      .catch(err => {
        console.log(err);
      });
 },[])

 

  // changePokeName = event => {
  //   this.setState({ pokeName: event.target.value });
  // };
  
  const changePokeName=event=>{
    setStatePokeName(event.target.value)
  }


  
    return (
      // <div className="App">
      
      //   <select onChange={this.changePokeName}>
      //     <option value={""}>Nenhum</option>
     
      //     {this.state.pokeList.map(pokemon => {
      //       return (
      //         <option key={pokemon.name} value={pokemon.name}>
      //           {pokemon.name}
      //         </option>
      //       );
      //     })}
      //   </select>
     
      //   {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
      // </div>
      <div>
            <select onChange={changePokeName}>
            <option value={""}>Nenhum</option>
            {pokeList.map(item=>{
              return (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              )
            })}
            </select>
            {pokeName && <PokeCard pokemon={pokeName}/>}
      </div>
    );
  }


export default App;
