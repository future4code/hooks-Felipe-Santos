"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/ping', (req, res) => {
    res.send("Pong!🏓");
});
app.get("/afazeres/all", (req, res) => {
    const afazeresAll = array.map((verdade) => {
        return verdade;
    });
    res.send(afazeresAll);
});
app.get("/afazeres/true", (req, res) => {
    const afazeresTrue = array.map((truee) => {
        if (truee.completed === true)
            return (true);
    });
    res.send(afazeresTrue);
});
app.get("/afazeres/false", (req, res) => {
    const afazeresTrue = array.map((truee) => {
        if (truee.completed === false)
            return (false);
    });
    res.send(afazeresTrue);
});
app.post("/afazeres/create", (req, res) => {
    const user = array.find((user) => user.id);
    const afazerescriar = req.body.name;
    const adicionarAfazeres = req.body.userId;
    const adicionarId = req.body.id;
    const adicionarTitle = req.body.title;
    const adicioarboolean = req.body.completed;
    const newAfazer = {
        id: adicionarId,
        userId: adicionarAfazeres,
        title: adicionarTitle,
        completed: adicioarboolean,
        array: []
    };
    array.push(newAfazer);
    express_1.response.status(201).send("afazeres Criado Com Sucesso");
});
const array = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    },
];
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
