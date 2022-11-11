import {Request,Response} from "express"
import { UserBusinesss } from "../Business/LoginBusiness"


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
        const userBusinesss=new UserBusinesss()
        await userBusinesss.loginAccount(input)
        res.status(201).send({message:"Usuario Logado Com Sucesso "})

    }catch(error:any){
        res.status(400).send(error.message)
    }

    }
}