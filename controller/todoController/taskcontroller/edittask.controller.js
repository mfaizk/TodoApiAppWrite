const TODO = require("../../../model/user.model");

const edittask = async (req, res) => {
  const { uid, todoId, taskId } = req.params;
  const { title, isCompleted } = req.body;

  if (!(uid && todoId && taskId && title))
    return res.status(401).send({ msg: "Insufficient data" });

  try {
    const data = await TODO.findOne({ _id: uid });
    if (!data) return res.status(401).send({ msg: "No user found" });
    const todoIndex = data.todo.findIndex((e) => e._id == todoId);
    if (todoIndex == -1) return res.status(401).send({ msg: "todo not found" });
    const taskIndex = data.todo[todoIndex].task.findIndex(
      (e) => e._id == taskId
    );
    if (todoIndex == -1) return res.status(401).send({ msg: "task not found" });
    data.todo[todoIndex].task[taskIndex].title = title;
    data.todo[todoIndex].task[taskIndex].isCompleted = isCompleted;
    await data.save();
    return res
      .status(200)
      .send({ msg: "sucess", task: data.todo[todoIndex].task });
  } catch (error) {
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = edittask;
