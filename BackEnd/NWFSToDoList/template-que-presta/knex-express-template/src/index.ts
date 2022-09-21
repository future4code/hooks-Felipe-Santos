import {Response ,Request} from "express";
import connection from "./database/connection";
import app from "./app";


type Cadastro={
  id:number
  name:string
  password:string
  email:string
}

app.post("/users",async(res:Response,req:Request)=>{
  let errorCode=400
  try{
    const{id,name,password,email}=req.body

    if(!name || !password || !email){
      throw new Error("Algo esta errado no body porfavor reveja")
    }

    const novoUser:Cadastro|any={
      id:Date.now,
      name,
      password,
      email
    }
    await connection.raw(`
    INSERT  INTO  labecommerce_users(id,name,password,email)
    VALUES ("${novoUser.id}","${novoUser.name}","${novoUser.password}","${novoUser.email}")
    `)
    res.status(200).send("Criado Com Sucesso")


  }catch(error){

    res.status(errorCode).send(error)

  }

  app.get("/users/buscar",async(res:Response,req:Request)=>{
    let errorCode=400
    try{
      const resultado=await connection.raw(`
      SELECT * FROM  labecommerce_users;
      `)
           
      res.status(200).send(resultado)
    }catch(error){
      res.status(errorCode).send(error)

    }
  })



})