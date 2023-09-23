"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_js_1 = __importDefault(require("./server.js"));
const port = 3000;
server_js_1.default.listen(port, () => {
    console.log('Server started on http://localhost:3000/');
});
