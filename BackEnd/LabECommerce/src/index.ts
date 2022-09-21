import express, {Express} from 'express'
import cors from 'cors'
import { Request, Response } from 'express';
import { AddressInfo } from "net";
import { connection } from './data/connection';

const app: Express = express();

app.use(express.json());
app.use(cors());


type Produto={
  id:number
  name:string
  price:number
  image_url:string

  
}

type Cadastro={
   id:number
   name:string
   password:string
   email:string
 }
 
 app.post("/users",async(req:Request,res:Response)=>{
   let errorCode=400
   try{
     const{id,name,password,email}=req.body
 
     if(!name || !password || !email){
       throw new Error("Algo esta errado no body porfavor reveja")
     }
 
     const novoUser:Cadastro|any={
       id,
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
   })
 
   app.get("/buscar",async(req:Request,res:Response)=>{
     let errorCode:number=400
     try{
       const resultado=await connection.raw(`
       SELECT * FROM  labecommerce_users;
       `)
            
       res.status(200).send(resultado)
     }catch(error:any){
       res.status(errorCode).send(error.message)
 
     }
   })
 
   app.post("/products/adicionar",async(req:Request,res:Response)=>{
    let errorCode=400
  
    try{
      const {id,name,price,image_url}=req.body
      if(!name || !price || !image_url){
        throw new Error("Algo Errado no body preencha tudo porfavor")
      }
      const Produto:Produto|any={
        id,
        name,
        price,
        image_url
      }
      await connection.raw(`
      INSERT INTO labecommerce_products (id,name,price,image_url)
      VALUES(${Produto.id},"${Produto.name}",${Produto.price},"${Produto.image_url}")
      `)
      res.status(200).send("Produto Criado Com Sucesso")
     

    }catch(error){
      res.status(errorCode).send(error)

    }

   });
 
   app.get("/products",async(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
      const pegarProduto=await connection.raw(`
      SELECT * FROM labecommerce_products;
      `)
      res.status(200).send(pegarProduto)
    }catch(error){
      res.status(errorCode).send(error)

    }
   });
 



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})