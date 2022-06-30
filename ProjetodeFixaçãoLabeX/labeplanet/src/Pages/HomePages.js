import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgBackground from "./IMGS/Space.jpeg"

const Container = styled.div`
display:flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
 padding-top: 250px; 
background-image: url(${imgBackground});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
`




const HomePages = () => {
    let navigate = useNavigate();

    return (
        <Container>

            <div>
                <button onClick={() => navigate("/ListTripsPage")}>Ver Viagens</button>

            </div>

            <div>
                <h2>LabePlanet</h2>
            </div>
            <div>
                <button onClick={() => navigate("/LoginPage")}>Àrea de Admin</button>
            </div>


        </Container>
    )
}
export default HomePages;