const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const sailthruRouter = require("./routes/sailthruRoute");
const iterableRouter = require("./routes/iterableRoute");
const app = new Koa();

app.use(bodyParser());

app.use(sailthruRouter.routes());
app.use(iterableRouter.routes());

module.exports = app;
