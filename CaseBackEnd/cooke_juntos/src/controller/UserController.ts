import {Request,Response} from "express"
import { UserBusiness } from "../Business/UserBusiness"

export class UserController{
     public InsertUser=async(
        req:Request,
        res:Response
    )=>{
        try{
            const{competicao,atleta,value,unidade}=req.body
            const input={
                competicao,
                atleta,
                value,
                unidade
            }
    
            const userBusiness=new UserBusiness()
            await userBusiness.InsertUser(input)
            
    
            res.status(201).send({message:"Usuario Criado"})
        }catch(error:any){
            res.status(400).send(error.message)
    
        }
    }
}

