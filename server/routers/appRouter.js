const { Router } = require("express");
const authenticator = require("./../middlewares/authenticator");
const countryRouter = require("./countryRouter");
const summaryRouter = require("./summaryRouter");
const authRouter = require("./authRouter");
const router = new Router();

router.get("/", (_req, res) => {
    res.send("LoginApp API");
});

router.use("/auth", authRouter);
router.use("/countries", authenticator, countryRouter);
router.use("/countries/:country", authenticator, countryRouter);
router.use("/summary", authenticator, summaryRouter);

module.exports = router;