"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12,
        adicionar: ""
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
];
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["NORMAL"] = "NORMAL";
})(UserType || (UserType = {}));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/users", (req, res) => {
    try {
        const user = req.query.user;
        const userfound = users.findIndex((Usuario) => {
            return Usuario.name === user;
        });
        if (!userfound) {
            throw new Error("Insira um Usuario Porfavor");
        }
        res.send(200).send(userfound);
    }
    catch (_a) {
        res.send("Não achei porfavor tente novamente ");
    }
});
app.get("/users/add ", (req, res) => {
    const adicionar = {
        adicionar: req.body.adicionar
    };
    users.push(adicionar);
    res.status(201).send(adicionar);
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
