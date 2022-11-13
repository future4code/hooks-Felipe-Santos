import {Request,Response} from "express"
import { UserBusiness } from "../Business/SignupBusiness"



export class  UserController{
    public CreateAccount=async(
        req:Request,
        res:Response
    )=>{
        try{
            const{name,email,password}=req.body
            
            const input={
                
                name,
                email,
                password
            }
            const userBusiness= new UserBusiness()
            const token=await userBusiness.CreateAccount(input)
            
            res.status(201).send({message:"usuario cadastrado com sucesso",token})
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }



}
