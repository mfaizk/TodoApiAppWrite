const TODO = require("../../../model/user.model");

const gettask = async (req, res) => {
  const { uid, todoId, sort } = req.params;

  if (!(uid && todoId))
    return res.status(401).send({ msg: "Insufficient data" });

  if (sort == "default") {
    try {
      const data = await TODO.findOne({ _id: uid });
      const todoIndex = data.todo.findIndex((e) => e._id == todoId);
      if (todoIndex == -1)
        return res.status(401).send({ msg: "todo not found" });

      res.status(200).send(data.todo[todoIndex].task);
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  } else if (sort == "ctime") {
    try {
      const data = await TODO.findOne({ _id: uid });
      const todoIndex = data.todo.findIndex((e) => e._id == todoId);
      if (todoIndex == -1)
        return res.status(401).send({ msg: "todo not found" });
      const sortedData = data.todo[todoIndex].task.sort(
        (x, y) => x.createdAt - y.createdAt
      );
      res.status(200).send(data.todo[todoIndex].task);
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  } else if (sort == "uptime") {
    try {
      const data = await TODO.findOne({ _id: uid });
      const todoIndex = data.todo.findIndex((e) => e._id == todoId);
      if (todoIndex == -1)
        return res.status(401).send({ msg: "todo not found" });
      const sortedData = data.todo[todoIndex].task.sort(
        (x, y) => x.updatedAt - y.updatedAt
      );
      res.status(200).send(data.todo[todoIndex].task);
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  } else {
    res.status(401).send({ msg: "invalid option" });
  }
};

module.exports = gettask;
