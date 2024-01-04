const serverless = require("serverless-http");
const server = require("../server");

const handler = serverless(server);

exports.handler = async (event, context) => {
  try {
    return await handler(event, context);
  } catch (error) {
    console.error(error);
    context.status = 500;
    context.body = { "Error in lambdaOne handler": error.message };
  }
};
