const router = require("express").Router();
const signupController = require("../controller/authController/signup.controller");

router.get("/", (req, res) => res.send("Yolo in home"));
router.post("/api/v1/signup", signupController);
module.exports = router;
