import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomePages = () => {
    let navigate=useNavigate();

    return (
        <div>
            <div>
                <button onClick={()=>navigate("/ListTripsPage")}>Ver Viagens</button>

            </div>
            <div>
                <button onClick={()=>navigate("/LoginPage")}>Àrea de Admin</button>
            </div>
            <div>
                <h2>LabePlanet</h2>
            </div>
            <div>

            </div>
        </div>
    )
}
export default HomePages;