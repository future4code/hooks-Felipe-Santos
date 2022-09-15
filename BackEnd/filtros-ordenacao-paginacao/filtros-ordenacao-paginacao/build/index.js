"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_json_1 = __importDefault(require("./data/users.json"));
const getAllUsers_1 = require("./data/endpoints/getAllUsers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/users", getAllUsers_1.getUsers, (req, res) => {
    const showUsers = users_json_1.default.map(user => user);
    res.send(showUsers);
});
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