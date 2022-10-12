import { Request, response, Response } from "express";
import { request } from "http";
import { Userbusines } from "../Business/Userbusines";
import { UserDatabase } from "../data/UserDatabase";

export class Usercontroller{
    public createUser = async ( req:Request ,res:Response) => {
        try {
           const { name, nickname, email, password } = req.body
     
           const input={
             name,
             nickname,
             email,
             password
           }
     
           const userBusiness=new Userbusines()
           await userBusiness.createUser(input)
         
           
           res.status(201).send({ message: "Usuário criado!" })
        } catch (error:any) {
           res.status(400).send(error.message)
        }
     }

}

