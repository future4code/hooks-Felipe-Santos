export const HomePages = (navigator) => {
    navigator("/LoginPage")
}
export const LoginPage = (navigator) => {
    navigator("/HomePages")
}
export const ApplicationFormPage = (navigator) => {
    navigator("/ListTripsPage")
}
export const ListTripsPage = (navigator) => {
    navigator("/HomePages")
}
export const AdminHomePage = (navigator) => {
    navigator("/LoginPage")
}
export const CreateTripPage = (navigator) => {
    navigator("/AdminHomePage")
}
export const TripDetailsPage = (navigator) => {
    navigator("/AdminHomePage")
}
