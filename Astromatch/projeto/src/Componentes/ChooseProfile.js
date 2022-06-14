import axios from "axios";
import { Profiler, useEffect, useState } from "react";

const  ChooseProfile=()=>{
    const [receber,setReceber]=useState([])
    
    
    const matchesAceito=()=>{
          axios
          .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/matches")
          .then((res)=>{
             setReceber(res.data.matches)
            
              
          })
          .catch((er)=>{
              alert("ERRO no matchesAceito")
              
          })

      }
   
      useEffect(()=>{
        matchesAceito();

      },[])
     const listarenderizada=receber.map((profile)=>{
        return  <div>
        <img src={profile.photo} alt=""/>
        <h1>{profile.name}</h1>
        
           

         </div> 
     })

    return (
        <div>
        {listarenderizada}
        </div>
    )
}
export default ChooseProfile;