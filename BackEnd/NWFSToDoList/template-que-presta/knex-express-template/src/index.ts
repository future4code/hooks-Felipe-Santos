import {Response ,Request} from "express";
import connection from "./database/connection";
import app from "./app";



type Cadastro={
  id:Number,
  nome:string,
  nickname:string,
  email:string,
}

type task={
 title:string
 description:string,
 limiteDate:string,
 CreatorUserID:Number

}
app.get("/cadastro/users",async (req:Request,res:Response)=>{
  let errorCode=400
  try{
    const users= await connection.raw(`
    SELECT * FROM Cadastro;
    `)  
    res.status(200).send(users)
  }catch(error){
    res.status(errorCode).send(errorCode)

  }
  
})



app.get("/Cadastro/users/:id",async(req:Request,res:Response)=>{
 let errorCode=400
 try{
  const buscar=req.body.id
  if(buscar){
    const achado=await connection.raw(`
    SELECT * FROM Cadastro
    WHERE id="${buscar}";
    `)
  }

 }catch(error){
  res.status(errorCode).send(errorCode)
 }

})

app.post("/Cadastro/task",async(req:Request,res:Response)=>{
  let errorCode=400
  try{ 
    const {title,description,limiteDate,CreatorUserID}:task=req.body
    if(!title){
      throw new Error("Digite algum titulo")
    }
    if(!description){
      throw new Error("digite alguma descrição")
    }
    if(!limiteDate){
      throw new Error("Digite alguma data limite")
    }
    if(!CreatorUserID){
      throw new Error("digite algum id")
    }
    const novaTask:task|any={
      CreatorUserID,
      title,
      description,
      limiteDate,
    }
    await connection.raw(` INSERTO INTO Tarefa(CreatorUserID,title,description,limiteDate)
    VALUES(${novaTask.CreatorUserID},${novaTask.title},${novaTask.description},${novaTask.limiteDate})
    `)

  }catch(erro){
    res.status(errorCode).send(errorCode)
  }
})

app.get("/Cadastro/Task/:id",async(req:Request,res:Response)=>{
  let errorCode=400
  try{
    const buscando=req.body.CreatorUserID
    if(buscando){
      const achado=await connection.raw (`
      SELECT * FROM Cadastro  FULL JOIN Tarefa ON Cadastro.id=Tarefa.CreatorUserID=${buscando}
      
      `)
    }

  }catch{
    res.status(errorCode).send(errorCode)

  }
})


app.post("/Cadastro/users/Cadastrando",async(req:Request,res:Response)=>{
  let errorCode=400
  try{
    const {nome,nickname,email}:Cadastro=req.body
    if(!nome){
      throw new Error("Digite algum Nome porfavor")
    }
    if(!nickname){
      throw new Error("Digite algum nickname porfavor")
    }
    if(!email){
      throw new Error("escolha um email porfavor")
  }
  const adicionarCadastro:Cadastro|any={
    id:Number(Date.now()),
    nome,
    nickname,
    email,
  }
  await connection.raw(`
  INSERT INTO Cadastro(id,nome,nickname,email)
  VALUES(${adicionarCadastro.id},
    "${adicionarCadastro.nome}",
    "${adicionarCadastro.nickname}"
    ,"${adicionarCadastro.email}")
  `)
  res.status(200).send("Cadastro Feito Com Sucesso !")

}catch(error){ res.status(errorCode).send(errorCode)}

})

...