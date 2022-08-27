import express from "express"
import cors from "cors"
import { setOriginalNode } from "typescript"


const cadastrados:clientes[]=[
    {id:1,
    name:"Felipe Oliveira Santos",
    cpf:"205-230-216-37",
    data:"14/01/2000"}
]

type clientes = {
    id: number
    name: string,
    cpf: string,
    data: string,
}

type transferencia = {
    name: string,
    cpf: string,
    valor: number,
    type: TIPO,
    data: string,
    operacao: operacao.transferencia,
    detalhe: string,
}
enum TIPO {
    DEBITO = "debito",
    CREDITO = "credito"
}
enum operacao {
    transferencia = "transferencia enviada",
    transferenciaRecebida = "Transferencia Recebida",
    deposito = "Deposito Recebido",
    pay = "pagamento de conta"
}
type pay = {
    description: string,
    valor: number,
    type: TIPO
    operacao: operacao
}

type User = {
    name: string,
    cpf: string,
    date: string,
    movimentacoes: deposito[] & transferencia[] & pay[]
}
type deposito = {
    name: string,
    cpf: string,
    valor: number,
    type: TIPO,
    data: string,
    operacao: operacao.deposito,
    detalhe: string,
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
        data: req.body.data
    }
    cadastrados.push(novoCadastro)
})





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})