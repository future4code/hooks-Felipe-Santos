import {Request,Response} from "express"
import { UserBusines } from "../Business/LoginBusiness"


export class LoginController{
    public loginAccount=async(
        req:Request,
        res:Response
    )=>{try{
        const {email,password}=req.body
        const input={
            email,
            password
        }
         const userBusinesss=new UserBusines()
        const result=await userBusinesss.loginAccount(input)
        console.log(result,"Controler")
        res.status(201).send({message:"Usuario Logado Com Sucesso "})

    }catch(error:any){
        res.status(400).send(error.message)
    }

    }
}