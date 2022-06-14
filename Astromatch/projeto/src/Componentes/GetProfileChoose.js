import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components'



const GetProfileChoose = ()=> {
    const [getPerfil,setStateGetperfil]=useState({})
   
    const getProfile=()=>{
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/person")
        .then((res)=>{
          setStateGetperfil(res.data.profile)    
        }).catch((err)=>{
          alert("erro na PI")
            
        })}    
      
      
      
        const ChoosePerson=(boleano)=>{
          const body={
             id:getPerfil.id,
             choice:boleano,
      
          }
          axios
          .post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/choose-person",
             body
          )
          .then((res)=>{
            getProfile();
          })
          .catch((err)=>{
            alert("erro")
          })
         

      }
        
      useEffect(()=>{
        getProfile();

      },[])
        
      

    return (
         <div>
           <div>
           <img src={getPerfil.photo} alt={""}/>
           </div>
           <div>
             {getPerfil.name}
           </div>
           <div>
             {getPerfil.bio}
           </div>
           <div>
             <button onClick={()=>ChoosePerson(true)}>Match</button>
           </div>
           <div>
             <button onClick={()=>ChoosePerson(false)}>Desmatch</button>
           </div>
          
        
         </div>
    )
}   
export default GetProfileChoose;