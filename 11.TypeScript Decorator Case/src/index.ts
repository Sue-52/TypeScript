// 引入 express
import express from "express";
import { AppRouter } from "./AppRouter";
import bodyParser from "body-parser";

// 创建 express 实例
const app = express();
app.use(AppRouter.getInstance());
app.use(bodyParser.urlencoded({ extended: true }));

// 监听端口并开启服务
app.listen(3000, () => {
  console.log("服务器启动成功：http://localhost:3000")
})