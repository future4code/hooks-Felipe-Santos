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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const connection_1 = require("../connection");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        let nome = req.query.name;
        let sort = req.query.sort;
        let order = req.query.order;
        let size = Number(req.query.size);
        let page = Number(req.query.page);
        if (!nome) {
            nome = "%";
        }
        if (!sort) {
            sort = "name";
        }
        if (order && order.toUpperCase() !== "ASC" && order.toLocaleUpperCase() !== "DESC") {
            order = "ASC";
        }
        let offset = size * (page - 1);
        const result = yield (0, connection_1.connection)("aula48_exercicio").where("name", "like", `%${nome}%`).orderBy(sort, order)
            .limit(size)
            .offset(offset);
        if (result.length < 1) {
            throw new Error("Nao foi encontrado");
        }
        res.status(200).send(result);
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
exports.getUsers = getUsers;
const toUsers = (input) => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    };
};
//# sourceMappingURL=getAllUsers.js.map