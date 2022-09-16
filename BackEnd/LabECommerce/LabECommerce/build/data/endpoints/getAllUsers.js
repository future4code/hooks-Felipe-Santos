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
        let type = req.query.type;
        let sort = req.query.sort;
        let order = req.query.order;
        let size = Number(req.query.size);
        let page = Number(req.query.page);
        if (!type) {
            type = "%";
        }
        if (sort !== "name" && sort !== "type") {
            sort = "name";
        }
        if (isNaN(size) || size < 1) {
            size = 10;
        }
        if (isNaN(page) || page < 1) {
            page = 1;
        }
        let offset = size * (page - 1);
        const result = yield (0, connection_1.connection)("aula48_exercicio")
            .where("type", "LIKE", `%${type}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset);
        if (result.length === 0) {
            throw new Error("Nenhum tipo de cargo encontrado!!!");
        }
        const users = result.map(toUsers);
        res.status(200).send(users);
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