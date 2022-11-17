import express from "express"
import {UserController } from "../Controller/SignupController"
import { LoginController } from "../Controller/LoginController"
import { ReceitasController } from "../Controller/ReceitasController"

export const userRouter=express.Router()

const userController=new UserController()
const LoginControl=new LoginController()
const UserBusines=new ReceitasController()

userRouter.post ("/signup",userController.CreateAccount)
userRouter.get("/Login",LoginControl.loginAccount)
userRouter.post("/Receitas",UserBusines.Receitas)