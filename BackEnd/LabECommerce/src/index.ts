import express, {Express} from 'express'
import cors from 'cors'
import { Request, Response } from 'express';
import { AddressInfo } from "net";
import { connection } from './data/connection';

const app: Express = express();

app.use(express.json());
app.use(cors());




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


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});