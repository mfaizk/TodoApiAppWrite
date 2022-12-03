const TODO = require("../../../model/user.model");

const addtask = async (req, res) => {
  //   console.log("Executed");
  const { uid, todoId } = req.params;
  if (!(uid && todoId))
    return res.status(401).send({ msg: "Insufficient data" });
  const { title } = req.body;
  if (!title) return res.status(401).send({ msg: "titile is required" });

  try {
    const data = await TODO.findOne({ _id: uid });
    if (!data) return res.status(401).send({ msg: "Invalid data" });
    const index = data.todo.findIndex((e) => e._id == todoId);
    data.todo[index].task.push({ title });
    const modData = await data.save();
    return res
      .status(201)
      .send({ msg: "sucess", task: modData.todo[index].task });
  } catch (error) {
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = addtask;
