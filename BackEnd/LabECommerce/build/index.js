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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("./data/connection");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/users", (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        const { id, name, password, email } = req.body;
        if (!name || !password || !email) {
            throw new Error("Algo esta errado no body porfavor reveja");
        }
        const novoUser = {
            id: Date.now,
            name,
            password,
            email
        };
        yield connection_1.connection.raw(`
     INSERT  INTO  labecommerce_users(id,name,password,email)
     VALUES ("${novoUser.id}","${novoUser.name}","${novoUser.password}","${novoUser.email}")
     `);
        res.status(200).send("Criado Com Sucesso");
    }
    catch (error) {
        res.status(errorCode).send(error);
    }
    app.get("/users/buscar", (res, req) => __awaiter(void 0, void 0, void 0, function* () {
        let errorCode = 400;
        try {
            const resultado = yield connection_1.connection.raw(`
       SELECT * FROM  labecommerce_users;
       `);
            res.status(200).send(resultado);
        }
        catch (error) {
            res.status(errorCode).send(error);
        }
    }));
}));
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map