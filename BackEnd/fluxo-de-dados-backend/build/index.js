"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const produtos = [
    { id: 1,
        name: "banana",
        price: 3.99
    },
    {
        id: 2,
        name: "maça",
        price: 2.99
    },
    {
        id: 3,
        name: "uva",
        price: 5.99
    }
];
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/testeAPI", (req, res) => {
    res.send("Usando API");
});
app.get("/todasFrutas", (req, res) => {
    const todasfrutas = produtos.map((frutas) => {
        return frutas;
    });
    res.send(todasfrutas);
});
app.post("/criarFruta", (req, res) => {
    const disgramado = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    };
    produtos.push(disgramado);
    res.status(201).send(disgramado);
});
// app.put("/mudarValor",(req,res)=>{
//     const id=(req.body.id)
//     const Frutamudar=produtos.map((frutas)=>{
//         frutas.id===id
//         if(!Frutamudar){
//             throw Error ("Não existe")
//         }else {
//         }
//     })
// })
app.delete("/delete/:id", (req, res) => {
    const id = Number(req.params.id);
    const achando = produtos.find((tarefa) => tarefa.id === id);
    const achandoindex = produtos.findIndex((tarefas) => tarefas.id === id);
    try {
        if (!achando) {
            throw new Error("fruta nao Encontrada");
        }
        else {
            produtos.splice(achandoindex, 1);
            res.send("Sua Tarefa foi excluida");
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
