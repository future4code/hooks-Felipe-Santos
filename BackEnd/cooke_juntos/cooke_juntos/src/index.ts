
import express, { Express, Request, Response } from "express"
import cors from "cors"
import {UserController } from "./Controller/SignupController"
import { LoginController } from "./Controller/LoginController"




const app: Express = express()
app.use(express.json())
app.use(cors())

const userController=new UserController()
const LoginControl=new LoginController()

app.post ("/signup",userController.CreateAccount)
app.post("/Login",LoginControl.loginAccount)





app.listen(3003, () => {
   console.log("Server running on port 3003")
})