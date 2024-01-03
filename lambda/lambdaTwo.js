const serverless = require("serverless-http");
const server = require("../server");
const { getPayloadWeight } = require("../commonFiles/commonFunctions");

const handler = serverless(server);

exports.handler = async (event, context) => {
  try {
    let payloadWeight = 0;
    if (event) {
      payloadWeight = await getPayloadWeight(event);
      console.log("lambdaTwo received payload bytes", payloadWeight);
      console.log("lambdaTwo - post api input", event);
    } else {
      console.log("No payload received.");
    }

    return await handler(event, context);
  } catch (error) {
    console.error("Error in lambdaTwo handler:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ "Error in lambdaTwo handler": error.message }),
    };
  }
};
