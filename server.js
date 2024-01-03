const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const AWS = require("aws-sdk");
const {
  generateOneLakhNumericStrings,
} = require("./commonFiles/generateOneLakhNumericStrings");
const { getPayloadWeight } = require("./commonFiles/commonFunctions");
const jsonData = require("./data.json");

const lambda = new AWS.Lambda();
const app = new Koa();
const router = new Router();

const dataObj = {
  from: "giri.reddy@nbcuni.com",
  toAddresses: [],
  ccAddresses: ["4652298267444358281"],
  bccAddresses: ["3699587641358784981"],
  messageID: "12352",
  subject: "Welcome all testing 52",
  html: "<html>Custom Emial Platform Test.</html>",
  custom_fields: { emailType: "blast" },
  projectId: 109006,
  campaignId: 29501997,
};

app.use(bodyParser());

// POST route
router.post("/lambda1", async (ctx) => {
  try {
    console.log(
      "lambda1 received payload bytes",
      getPayloadWeight(ctx.request.body)
    );
    console.log("static file data length", getPayloadWeight(jsonData));
    const params = {
      FunctionName: "my-serverless-app-dev-lambdaTwo",
      InvocationType: "RequestResponse",
      Payload: JSON.stringify(jsonData),
    };
    const contentLength = ctx.headers["content-length"];

    const response = await lambda.invoke(params).promise();

    console.log("after lambdaTwo invoked ", response);
    ctx.status = 200;
    ctx.body = { message: "POST request processed successfully" };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { api_gateway_error: error.message };
  }
});

// GET route
router.get("/lambda1", async (ctx) => {
  try {
    const data = await generateOneLakhNumericStrings(16);
    dataObj.toAddresses = data;

    ctx.status = 200;
    ctx.body = { message: "GET request processed successfully", data: dataObj };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
