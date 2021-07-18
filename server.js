const express = require("express");
const morgan = require("morgan");
const rootRouter = require("./routers/rootRouter");

const app = express();
const logger = morgan("dev");

app.use(logger); // req, res를 보기 좋게 formatting 해주는 모듈
app.use(express.urlencoded({ extended: true })); // req.body 데이터를 받아오기 위함
app.use(express.json());

app.use("/", rootRouter);

module.exports = app;
