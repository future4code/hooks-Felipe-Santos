import express,{Request,Response} from "express";
import cors from "cors";
import connection from "./database/connection"

const app = express();
type clientes={
  id:number
  nome:string
  email:string
  
}


app.use(express.json());
app.use(cors());

app.get(("Cliente/todosCliente"),async(req:Request,res:Response)=>{
  let errorcode=400
  try{
    const achando=req.query.achando
      
    if (achando){
      const achado=await connection.raw(`
       SELECT * FROM  clientes WHERE nome ="${achando}"
      `)
      res.status(200).send(achado[0])

    }

    const exemplo= await connection.raw(`
    SELECT * FROM  clientes ;
    `)

    res.status(200).send(exemplo[0])

  }catch(error){
    res.status(errorcode).send(error.message)
  }

})

app.post("Cliente/Adicionar",async(req:Request,res:Response)=>{
  let errorcode=400
  try{
    const {nome,email}=req.body
    if(!nome){
      throw new Error("Voce Precisa Escolher um nome")
    }
    if(!email){
      throw new Error("Voce Precisa Escolher um Email")
    }
    const novoItem:clientes|any={
      id:Number(Date.now()),
      nome,
      email,
    }
    await connection.raw(`
    INSET INTO  Clientes(nome,email)
    VALUES(${novoItem.id},"${novoItem.nome}","${novoItem.email}")
    `)

    


  }catch(error){
    res.status(errorcode).send(error.message)
  }



})

app.put("clientes/:id",async(req:Request,res:Response)=>{
  let errorcode=400
  try {const id=Number(req.params.id)
    const email=req.params.email

    
    const emailMudado=req.body.email
  
    await connection.raw(`
    UPDATE clientes
    SET email =${emailMudado} WHERE id=${id} AND ${email};
    `)
    res.status(200).send("Email Alterado Com Sucesso")
  

  }catch(error){
    res.status(errorcode).send(error.message)

  }
  

})

app.delete("clientes/apagar/:id",async(req:Request,res:Response)=>{
 let errorcode=400
  try{
    const id=Number(req.params.id)

    const clientes=await connection.raw(`
    SELECT * FROM clientes WHERE id=${id}`)

    if(clientes[0].length===0){
      throw new Error("Cliente não encontrado ou id Invalido")
    }

    await connection.raw(`
    DELETE FROM clientes WHERE id=${id}`)
   
    res.status(200).send("Cliente Deletado")
  }catch(error){
    res.status(errorcode).send(error.message)

  }
})





app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});