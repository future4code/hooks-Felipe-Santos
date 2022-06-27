import React from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const CaixaPai=styled.div`
text-align: center;
padding-top: 100px;
`




const AdminHomePage = () => {
    let navigate = useNavigate();

    return (
        <CaixaPai>
            <div>
                <button>Criar Viajem</button>
            </div>
            <div><button>Detalhe Das Viajem</button></div>
            <div><button onClick={() => navigate("/LoginPage")}>Voltar</button></div>
        </CaixaPai>
    )
}
export default AdminHomePage