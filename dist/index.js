"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
let puerto = 3000;
const server = server_1.default.init(puerto);
server.app.use(router_1.default);
// ============================
//       MySQL instance
// ============================
// MySQL.instance;
server.start(() => {
    console.log(`Escuchando en el puerto ${puerto}`);
});
