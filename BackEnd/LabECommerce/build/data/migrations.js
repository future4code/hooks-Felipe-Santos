"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const users_json_1 = __importDefault(require("./users.json"));
const printError = (error) => { console.log(error.sqlMessage || error.message); };
const createTables = () => connection_1.connection
    .raw(`
      CREATE TABLE IF NOT EXISTS aula48_exercicio(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         type VARCHAR(255) NOT NULL
      );
   `)
    .then(() => { console.log("Tabela criada!"); })
    .catch(printError);
const insertUsers = () => (0, connection_1.connection)("aula48_exercicio")
    .insert(users_json_1.default)
    .then(() => { console.log("Usuários criados"); })
    .catch(printError);
const closeConnection = () => { connection_1.connection.destroy(); };
createTables()
    .then(insertUsers)
    .finally(closeConnection);
//# sourceMappingURL=migrations.js.map