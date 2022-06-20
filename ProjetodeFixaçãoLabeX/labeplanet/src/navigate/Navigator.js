import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePages from "../Pages/HomePages";
import LoginPage from "../Pages/LoginPage"
import ListTripsPage from "../Pages/ListTripsPage";
import CreateTripPage from "../Pages/CreateTripPage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import AdminHomePage from "../Pages/AdminHomePage";



const Navigator=()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePages/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
            <Route path="/CreateTripPage" element={<CreateTripPage/>}/>
            <Route path="/LisTripsPage" element={<ListTripsPage/>}/>
            <Route path="/TripDetailsPage" element={<TripDetailsPage/>}/>
            <Route path="/ApplicationFormPage" element={<ApplicationFormPage/>}/>
            <Route path="/AdminHomePage" element={<AdminHomePage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigator;