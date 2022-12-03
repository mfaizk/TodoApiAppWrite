const TODO = require("../../../model/user.model");

const deletetask = async (req, res) => {
  const { uid, todoId, taskId } = req.params;

  if (!(uid, todoId, taskId)) return res.send({ msg: "Insufficient data" });

  try {
    const data = await TODO.findOne({ _id: uid });
    const todoIndex = data.todo.findIndex((e) => (e._id = todoId));
    if (todoIndex == -1) return res.status(401).send({ msg: "Invalid todoID" });
    console.log(data.todo[todoIndex]);
    const taskIndex = data.todo[todoIndex].task.findIndex(
      (e) => e._id == taskId
    );
    if (taskIndex == -1) return res.status(401).send({ msg: "Invalid taskId" });

    data.todo[todoIndex].task.splice(taskIndex, 1);
    await data.save();
    return res
      .status(200)
      .send({ msg: "sucess", task: data.todo[todoIndex].task });
  } catch (error) {
    // console.log("occured");
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = deletetask;
