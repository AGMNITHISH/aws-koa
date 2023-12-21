const serverless = require("serverless-http");
const server = require("./server");

const handler = serverless(server);

module.exports.handler = async (event, context) => {
  try {
    const receivedData = JSON.parse(event.body);
    console.log(
      "successfully lambdaTwo received data from lambdaOne : ",
      receivedData
    );
    return await handler(event, context);
  } catch (error) {
    context.status = 500;
    context.body = { "Error in lambdaTwo handler": error.message };
  }
};
