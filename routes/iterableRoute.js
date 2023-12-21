const Router = require("koa-router");
const {
  generateOneLakhNumericStrings,
} = require("../commonFiles/generateOneLakhNumericStrings");
const AWS = require("aws-sdk");
const lambda = new AWS.Lambda();

const router = new Router({ prefix: "/iterable" });

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

router.get("/maskedEmail", async (context) => {
  try {
    const data = await generateOneLakhNumericStrings(16);
    dataObj.toAddresses = data;
    context.body = dataObj;
  } catch (error) {
    context.status = 500;
    context.body = error.message || "internal server error";
  }
});

router.post("/lambda1", async (context) => {
  try {
    const params = {
      FunctionName: "my-serverless-app-dev-lambdaTwo",
      InvocationType: "RequestResponse",
      Payload: JSON.stringify(context.request.body),
    };

    const contentLength = context.headers["content-length"];

    const response = await lambda.invoke(params).promise();

    console.log("after lambdaTwo invoked ", contentLength, response);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data sent to second Lambda successfully",
      }),
    };
  } catch (error) {
    console.error("lambdaOne post api error", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending data to second Lambda",
        InputData: context.request.body,
      }),
    };
  }
});

module.exports = router;
