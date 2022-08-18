"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/users", (req, res) => {
    const users = array.map((usuario) => {
        return usuario.name;
    });
    res.send(array);
});
app.delete("/users/:userID", (req, res) => {
    const userID = req.params.userID;
    const deletando = array.map((user) => {
        if (user.id === userID) {
            return Object.assign(Object.assign({}, user), { array: [] });
        }
        else {
            return user;
        }
    });
    res.send(array);
});
const array = [
    { id: "a1s2d3f4", name: "Carlos", phone: "40028922", email: "Carlosfelipe@gmail.com", website: "carlosVemCompraComigo.com.br" },
    { id: "a1b2c3d4", name: "Rainha Elizabeth", phone: "36037354", email: "rainhaDaParadaToda@gmail.com", website: "RainhaDaInglaterra#.com.br" }
];
app.listen(3003, () => console.log("O Servido esta Online na porta 3003"));
