import { Request, Response } from "express";
import {connection} from "../connection";
import {User} from "./types"


export const getUsers = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
     let nome=req.query.name as string
     let sort=req.query.sort as string
     let order=req.query.order as string
     let size=Number(req.query.size) 
     let page=Number(req.query.page)

     if(!nome){
      nome="%"
    }
    if(!sort){
      sort="name"
    }

     if(order&& order.toUpperCase() !=="ASC"&& order.toLocaleUpperCase()!=="DESC"){
      order="ASC"
     }
     
     
     let offset=size * (page-1)

     const result=await connection("aula48_exercicio").where("name"
     ,"like"
     ,`%${nome}%`).orderBy(sort,order)
     .limit(size)
     .offset(offset)

  
    if(result.length<1){
      throw new Error("Nao foi encontrado")
    }
    
    
   res.status(200).send(result)
    

       
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}

const toUsers = (input: any): User=> {
 
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type
  }
}