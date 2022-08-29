"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cadastrados = [
    {
        id: 1,
        name: "Felipe Oliveira Santos",
        cpf: 20523021637,
        data: "14/01/2000",
        movimentodaconta: [],
        dinheiro: 0
    }
];
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/banco/clientesCadastrados", (req, res) => {
    const cadastro = cadastrados.map((clientes) => {
        return clientes;
    });
    res.send(cadastro);
});
app.post("/banco/cadastraClientes", (req, res) => {
    const novoCadastro = {
        id: Date.now(),
        name: req.body.name,
        cpf: req.body.cpf,
        data: req.body.data,
        movimentodaconta: [],
        dinheiro: 0
    };
    cadastrados.push(novoCadastro);
});
app.get("/banco/verSaldo", (req, res) => {
    try {
        const cpf = Number(req.headers.cpf);
        const result = cadastrados.filter(achando => achando.cpf === cpf);
        return res.send(result);
    }
    catch (_a) {
    }
});
app.post("/banco/receber/pagar", (req, res) => {
    try {
        const cpf = Number(req.headers.cpf);
        const testando = {
            data: req.body.date
        };
        const puxando = {
            value: req.body.dinheiro,
        };
        const adicionar = cadastrados.map((verificar) => {
            if (verificar.cpf === cpf) {
                verificar.dinheiro += req.body.dinheiro;
                verificar.movimentodaconta.push(puxando);
            }
            else {
                (verificar.cpf === cpf);
                verificar.dinheiro - req.body.dinheiro;
                verificar.movimentodaconta.push(puxando);
            }
            return verificar;
        });
        res.send(adicionar);
    }
    catch (_a) {
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
