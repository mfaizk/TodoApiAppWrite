const router = require("express").Router();
const addtodo = require("../controller/todoController/addtodo.controller");
const deletetodo = require("../controller/todoController/deletetodo.controller");
const edittodo = require("../controller/todoController/edittodo.controller");
const gettodo = require("../controller/todoController/gettodo.controller");
const searchtodo = require("../controller/todoController/searchtodo.controller");

router.get("/", (req, res) => res.send("Yolo in home"));
// router.post("/api/v1/signup", signupController);
// router.post("/api/v1/signin", signinController);

//TODO Controller
router.post("/api/v1/todo/:uid", addtodo);
router.delete("/api/v1/todo/:uid/:todoId", deletetodo);
router.put("/api/v1/todo/:uid/:todoId", edittodo);
router.get("/api/v1/todo/:uid/:sort", gettodo);
router.get("/api/v1/todo/search/:uid", searchtodo);

module.exports = router;
