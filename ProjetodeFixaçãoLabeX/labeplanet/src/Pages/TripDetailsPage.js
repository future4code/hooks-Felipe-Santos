import React, { useEffect } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"




const TripDetailsPage = () => {
    
    useEffect(()=>{
        const token=localStorage.getItem("token")
        if(token===null){
            Navigate("/LoginPage")

        }

    },[Navigate])
    
    
    
    
    useEffect(()=>{
        const URL="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trip/{id}"
        
        const headers={
            headers:{
                auth:localStorage.getItem("token")
            }
        }
        
        axios.get(URL,headers)
        .then((res)=>{

        }).cath((erro)=>{

        })

    },)

    return (
        <div>
             
        </div>
    )
}
export default TripDetailsPage