import express from "express"
import cors from "cors"
import { idText, setOriginalNode, visitFunctionBody } from "typescript"


const cadastrados:clientes[]=[
    {id:1,
    name:"Felipe Oliveira Santos",
    cpf:20523021637,
    data:"14/01/2000",
    movimentodaconta:[],
    dinheiro:0
}
]

type clientes = {
    id: number
    name: string,
    cpf: number,
    data: string,
    movimentodaconta:[],
    dinheiro:number
}


const app = express()
app.use(express.json())
app.use(cors())


app.get("/banco/clientesCadastrados", (req, res) => {
       const cadastro=cadastrados.map((clientes)=>{
        return clientes
       })
       res.send(cadastro)
})
   
app.post("/banco/cadastraClientes",(req,res)=>{
    const novoCadastro:clientes={
        id: Date.now(),
        name: req.body.name,
        cpf: req.body.cpf,
        data: req.body.data,
        movimentodaconta:[],
        dinheiro:0
    }
    cadastrados.push(novoCadastro)
})

app.get("/banco/verSaldo",(req,res)=>{
    try{
        const cpf =Number(req.headers.cpf)
        const result=cadastrados.filter(achando=>achando.cpf===cpf)
        return res.send(result) 
    } catch{

    }
})
  
app.patch("/banco/adicionar",(req,res)=>{
  try {const cpf =Number(req.headers.cpf)
    const mudar=(req.body.dinheiro)
    const adicionar=cadastrados.map((verificar)=>{verificar.cpf===cpf})
     const novo:clientes|any={
        dinheiro:req.body.dinheiro,
        
     }
     cadastrados.push( adicionar && novo &&mudar )
     res.send(cadastrados)
   
  
  

  }catch{

  }
})

app.put("/banco/pagarConta",(req,res)=>{
    try{const cpf=Number(req.headers.cpf)
        const pagar=Number(req.body.dinheiro)
        const adicionar:number|any=cadastrados.map((verificar)=>{verificar.cpf===cpf})
        const meuDinDin:Number|any=cadastrados.map((dinheirinho)=>dinheirinho.dinheiro)
        const pagarcontinha:clientes|any={
            dinheiro:pagar,
            data:req.body.data
        }
        const pagamento= meuDinDin-pagarcontinha
         cadastrados.push(adicionar &&pagamento)
         res.send(cadastrados)

    }catch{

    }
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})