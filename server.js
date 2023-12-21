const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const iterableRouter = require("./routes/iterableRoute");
const app = new Koa();

app.use(bodyParser());

app.use(iterableRouter.routes());

module.exports = app;
