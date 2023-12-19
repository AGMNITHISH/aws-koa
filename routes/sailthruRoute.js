const Router = require("koa-router");

const router = new Router({ prefix: "/sailthru" });

router.get("/email", async (context) => {
  try {
    context.body = "hii";
  } catch (error) {
    context.status = 500;
    context.body = { error: error.message };
  }
});

router.post("/email", async (context) => {
  try {
    const requestBody = context.request.body;
    context.body = requestBody;
  } catch (error) {
    ontext.status = 500;
    context.body = { error: error.message };
  }
});
module.exports = router;
