import React from 'react'
import lisTripsPage from './ListTripsPage'


const homePages = () => {
    return (
        <div>
            <div>
                <button onClick={lisTripsPage}>Ver Viagens</button>

            </div>
            <div>
                <button>Àrea de Admin</button>
            </div>
            <div>
                <h2>LabePlanet</h2>
            </div>
            <div>

            </div>
        </div>
    )
}
export default homePages