import express, {Express} from 'express'
import cors from 'cors'
import { Request, Response } from 'express';
import { AddressInfo } from "net";
import { Cadastro } from './type';
import { connection } from './data/connection';


const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/cadastro",async(req:Request,res:Response)=>{
   let errorCode=400
  try {
   const {name,email,password}=req.body
   if(!name){
      throw new Error("Passe o name Porfavor")

   }
   if(!email){
      throw new Error("Passe o email Porfavor")

   }
   if(!password){
      throw new Error("Paase o Password porfavor")
   
   }
   const cadastro:Cadastro|any ={
      id:Date.now(),
      name,
      password,
      email,
   }
    await connection.raw(`
    INSERTO INTO  labecommerce_users(id,name,password,email)
    VALUES(${cadastro.id},"${cadastro.name}","${cadastro.password}","${cadastro.email}")
    `)
    res.status(200).send("Cadastrado Com Sucesso")



  }catch(error){
   res.status(errorCode).send(errorCode)

  }


})

app.get("/users/todos",async(req:Request,res:Response)=>{
   let errorCode=400
   try{
      const resultado=await connection.raw(`
      SELECT * FROM labecommerce_users;
      `)
      res.status(200).send(resultado)

   }catch(error){
      res.status(errorCode).send(errorCode)

   }
})







const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});