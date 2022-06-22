import React from "react"
import { useNavigate } from 'react-router-dom'



const ListTripsPage = () => {
    let navigate=useNavigate();

    return (
        <div>
            
            <div> <button onClick={()=>navigate("/")}> Sair</button></div>
             
        </div>
    )
}
export default ListTripsPage