const Router = require("koa-router");

const router = new Router({ prefix: "/lambdaTwo" });

router.post("/email", async (event, context) => {
  try {
    const requestBody = JSON.parse(event.body);
    context.body = requestBody;
  } catch (error) {
    context.status = 500;
    context.body = { error: error.message };
  }
});
module.exports = router;
