//lambda2 involking function is wrong. Right now it's Not in Use

const Router = require("koa-router");

const router = new Router({ prefix: "/lambdaTwo" });

router.post("/email", async (event, context) => {
  try {
    console.log("Received event:", event); // Log the received event
    console.log("Received context:", context); // Log the received context

    return true;
  } catch (error) {
    context.status = 500;
    context.body = { "Error in lambda1": error.message };
  }
});
module.exports = router;
