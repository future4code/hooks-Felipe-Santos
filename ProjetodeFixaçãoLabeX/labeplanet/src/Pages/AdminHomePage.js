import React from "react"
import { useNavigate } from 'react-router-dom'



const AdminHomePage = () => {
    let navigate=useNavigate();
    return (
        <div>
             <div>
                <button>Criar Viajem</button>
             </div>
             <div><button>Detalhe Das Viajem</button></div>
             <div><button onClick={()=>navigate("/LoginPage")}>Voltar</button></div>
        </div>
    )
}
export default AdminHomePage