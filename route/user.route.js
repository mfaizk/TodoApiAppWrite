const router = require("express").Router();
const signinController = require("../controller/authController/signinController");
const signupController = require("../controller/authController/signup.controller");

router.get("/", (req, res) => res.send("Yolo in home"));
router.post("/api/v1/signup", signupController);
router.post("/api/v1/signin", signinController);
module.exports = router;
