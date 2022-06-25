import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


const Container= styled.div`
display:flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
padding-top: 250px;
`




const HomePages = () => {
    let navigate=useNavigate();
 
    return (
        <Container>
            <div>
                <button onClick={()=>navigate("/ListTripsPage")}>Ver Viagens</button>

            </div>
            
            <div>
                <h2>LabePlanet</h2>
            </div>
            <div>
                <button onClick={()=>navigate("/LoginPage")}>Àrea de Admin</button>
            </div>
            
            
        </Container>
    )
}
export default HomePages;