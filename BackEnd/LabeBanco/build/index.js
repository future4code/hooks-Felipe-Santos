"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cadastrados = [
    { id: 1,
        name: "Felipe Oliveira Santos",
        cpf: "205-230-216-37",
        data: "14/01/2000" }
];
var TIPO;
(function (TIPO) {
    TIPO["DEBITO"] = "debito";
    TIPO["CREDITO"] = "credito";
})(TIPO || (TIPO = {}));
var operacao;
(function (operacao) {
    operacao["transferencia"] = "transferencia enviada";
    operacao["transferenciaRecebida"] = "Transferencia Recebida";
    operacao["deposito"] = "Deposito Recebido";
    operacao["pay"] = "pagamento de conta";
})(operacao || (operacao = {}));
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
        data: req.body.data
    };
    cadastrados.push(novoCadastro);
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
