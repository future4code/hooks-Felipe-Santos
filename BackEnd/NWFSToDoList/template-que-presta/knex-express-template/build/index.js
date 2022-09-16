"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./database/connection"));
const app_1 = __importDefault(require("./app"));
app_1.default.get("/cadastro/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        const users = yield connection_1.default.raw(`
    SELECT * FROM Cadastro;
    `);
        res.status(200).send(users);
    }
    catch (error) {
        res.status(errorCode).send(errorCode);
    }
}));
app_1.default.get("/Cadastro/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        const buscar = req.body.id;
        if (buscar) {
            const achado = yield connection_1.default.raw(`
    SELECT * FROM Cadastro
    WHERE id="${buscar}";
    `);
        }
    }
    catch (error) {
        res.status(errorCode).send(errorCode);
    }
}));
app_1.default.post("/Cadastro/users/Cadastrando", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        const { nome, nickname, email } = req.body;
        if (!nome) {
            throw new Error("Digite algum Nome porfavor");
        }
        if (!nickname) {
            throw new Error("Digite algum nickname porfavor");
        }
        if (!email) {
            throw new Error("escolha um email porfavor");
        }
        const adicionarCadastro = {
            id: Number(Date.now()),
            nome,
            nickname,
            email,
        };
        yield connection_1.default.raw(`
  INSERT INTO Cadastro(id,nome,nickname,email)
  VALUES(${adicionarCadastro.id},
    "${adicionarCadastro.nome}",
    "${adicionarCadastro.nickname}"
    ,"${adicionarCadastro.email}")
  `);
        res.status(200).send("Cadastro Feito Com Sucesso !");
    }
    catch (error) {
        res.status(errorCode).send(errorCode);
    }
}));
//# sourceMappingURL=index.js.map