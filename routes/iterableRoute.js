const Router = require("koa-router");
const router = new Router({ prefix: "/iterable" });

router.get("/maskedEmail", async (context) => {
  try {
    context.body = "iterable received maskedEmail id ";
  } catch (error) {
    context.status = 500;
    context.body = error.message || "internal server error";
  }
});

module.exports = router;
