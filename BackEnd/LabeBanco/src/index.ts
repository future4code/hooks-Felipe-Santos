import express from "express"
import cors from "cors"


const cadastrados: clientes[] = [
    {
        id: 1,
        name: "Felipe Oliveira Santos",
        cpf: 20523021637,
        data: "14/01/2000",
        movimentodaconta: [],
        dinheiro: 0
    }
]

type movimento = {

    value: number,
    date: string,
    description: string

}

type clientes = {
    id: number
    name: string,
    cpf: number,
    data: string,
    movimentodaconta:movimento[],
    dinheiro: number
}



const app = express()
app.use(express.json())
app.use(cors())


app.get("/banco/clientesCadastrados", (req, res) => {
    const cadastro = cadastrados.map((clientes) => {
        return clientes
    })
    res.send(cadastro)
})

app.post("/banco/cadastraClientes", (req, res) => {
    const novoCadastro: clientes = {
        id: Date.now(),
        name: req.body.name,
        cpf: req.body.cpf,
        data: req.body.data,
        movimentodaconta: [],
        dinheiro: 0
    }
    cadastrados.push(novoCadastro)
})

app.get("/banco/verSaldo", (req, res) => {
    try {
        const cpf = Number(req.headers.cpf)
        const result = cadastrados.filter(achando => achando.cpf === cpf)
        return res.send(result)
    } catch {

    }
})

app.post("/banco/receber/pagar", (req, res) => {
    try {
        const cpf = Number(req.headers.cpf)
        const puxando:clientes|any={
            value:req.body.dinheiro,
        }
        const adicionar = cadastrados.map((verificar) => {
            if (verificar.cpf === cpf) {
                verificar.dinheiro += req.body.dinheiro
                verificar.movimentodaconta.push(puxando)
            } else { (verificar.cpf===cpf)
                verificar.dinheiro-req.body.dinheiro
                verificar.movimentodaconta.push(puxando)
            

            }
            return verificar
        })
        res.send(adicionar)




    } catch {

    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})