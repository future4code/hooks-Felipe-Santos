import React from "react"
import { useNavigate } from 'react-router-dom'



const ListTripsPage = () => {
    let navigate=useNavigate();

    return (
        <div>
            
            <div> <button onClick={()=>navigate("/")}> Voltar</button></div>
            <div> <button onClick={()=>navigate("/ApplicationFormPage")}>Inscrever-se</button></div>
             
        </div>
    )
}
export default ListTripsPage