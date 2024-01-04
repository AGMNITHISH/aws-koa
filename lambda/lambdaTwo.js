const serverless = require("serverless-http");
const server = require("../server");
const { getPayloadWeight } = require("../commonFiles/commonFunctions");

const handler = serverless(server);

exports.handler = async (event, context) => {
  try {
    return await handler(event, context);
  } catch (error) {
    console.error("Error in lambdaTwo handler:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ "Error in lambdaTwo handler": error.message }),
    };
  }
};
