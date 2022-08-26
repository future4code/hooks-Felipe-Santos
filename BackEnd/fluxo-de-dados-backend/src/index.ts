import express from "express"
import cors from "cors"
import { v4 as generateID} from "uuid"
import { isTemplateExpression, reduceEachLeadingCommentRange } from "typescript"

type Valores={
    id:number
    name:string
    price:number
 }

const produtos:Valores[]=[
    {id:1 ,
    name:"banana",
    price:3.99
    },
    {  
        id:2,
        name:"maça",
        price:2.99
    },
    {
        id:3,
        name:"uva",
        price:5.99
    }
 ]


const app=express()
app.use(express.json())
app.use(cors())



app.get("/testeAPI",(req,res)=>{
    res.send("Usando API")

})


app.get("/todasFrutas",(req,res)=>{
    const todasfrutas=produtos.map((frutas)=>{
        
        return frutas
    })

    res.send(todasfrutas)
})




app.post("/criarFruta",(req,res)=>{
    const disgramado:Valores={
        id:Date.now(),
        name:req.body.name,
        price:req.body.price
    }

    produtos.push(disgramado)
    res.status(201).send(disgramado)
})
 

app.delete("/delete/:id",(req,res)=>{
    const id=Number(req.params.id)
    const achando=produtos.find((tarefa)=>tarefa.id===id)
    const achandoindex=produtos.findIndex((tarefas)=>tarefas.id===id)
    try{
        if(!achando){
            throw new Error("fruta nao Encontrada")

        }else {
            produtos.splice(achandoindex,1)
            res.send(produtos)
        }
    }catch(error:any){
        res.send(error)
    }
})



app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
});