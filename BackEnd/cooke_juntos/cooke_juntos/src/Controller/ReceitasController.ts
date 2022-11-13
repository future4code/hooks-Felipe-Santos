import {Request,Response} from "express"
import {UserBusines} from "../Business/ReceitasBusiness"

export class ReceitasController{
   public Receitas=async(
    req:Request,
    res:Response
   )=>{
    try{
        const{title,description,creation,date}=req.body

        const input={
            title,
            description,
            creation,
            date
        }
        const userBusiness=new UserBusines()
        await userBusiness.Receitas(input)
        res.status(201).send({message:"Receita Adicionada Com Sucesso",title})
    }catch(error:any){
        res.status(400).send(error.message)
    }
   }

}