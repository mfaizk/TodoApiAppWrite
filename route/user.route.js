const router = require("express").Router();
const addtodo = require("../controller/todoController/addtodo.controller");
const deletetodo = require("../controller/todoController/deletetodo.controller");
const edittodo = require("../controller/todoController/edittodo.controller");
const gettodo = require("../controller/todoController/gettodo.controller");
const searchtodo = require("../controller/todoController/searchtodo.controller");
const addtask = require("../controller/todoController/taskcontroller/addtask.controller");
const deletetask = require("../controller/todoController/taskcontroller/deletetask.controller");
const edittask = require("../controller/todoController/taskcontroller/edittask.controller");
const gettask = require("../controller/todoController/taskcontroller/gettask.controller");
const searchtask = require("../controller/todoController/taskcontroller/searchtask.controller");

router.get("/", (req, res) => res.send("Yolo in home"));
// router.post("/api/v1/signup", signupController);
// router.post("/api/v1/signin", signinController);

//TODO CONTROLLER
router.post("/api/v1/todo/:uid", addtodo);
router.delete("/api/v1/todo/:uid/:todoId", deletetodo);
router.put("/api/v1/todo/:uid/:todoId", edittodo);
router.get("/api/v1/todo/:uid/:sort", gettodo);
router.get("/api/v1/todo/search/:uid/:text", searchtodo);

//TASK CONTROLLER

router.post("/api/v1/:uid/:todoId", addtask);
router.delete("/api/v1/:uid/:todoId/:taskId", deletetask);
router.put("/api/v1/:uid/:todoId/:taskId", edittask);
router.get("/api/v1/:uid/:todoId/:sort", gettask);
router.get("/api/v1/:uid/search/:todoId/:search", searchtask);

module.exports = router;
