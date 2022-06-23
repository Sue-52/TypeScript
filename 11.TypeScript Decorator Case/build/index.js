"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 引入 express
var express_1 = __importDefault(require("express"));
var AppRouter_1 = require("./AppRouter");
var body_parser_1 = __importDefault(require("body-parser"));
// 创建 express 实例
var app = (0, express_1.default)();
app.use(AppRouter_1.AppRouter.getInstance());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// 监听端口并开启服务
app.listen(3000, function () {
    console.log("服务器启动成功：http://localhost:3000");
});
