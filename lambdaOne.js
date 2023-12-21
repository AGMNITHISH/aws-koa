const serverless = require("serverless-http");
const server = require("./server");

const handler = serverless(server);

module.exports.handler = async (event, context) => {
  try {
    console.log("lambdaOne - post api input", event, context);
    return await handler(event, context);
  } catch (error) {
    context.status = 500;
    context.body = { "Error in lambdaOne handler": error.message };
  }
};
