"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require('dotenv').config();
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const database_1 = require("./database");
const api_1 = require("./routes/api");
const app = express_1.default();
database_1.connectDatabase();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(compression_1.default());
app.use('/api/board', api_1.boardRouter);
app.use(express_1.default.static(`${__dirname}/client`));
app.get('/*', (_req, res) => res.sendFile(`${__dirname}/client/index.html`));
app.listen(process.env.PORT, () => {
    console.log(`[app]: Server started on http://localhost:${process.env.PORT}`);
});
