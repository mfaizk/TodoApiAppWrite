const TODO = require("../../model/user.model");

const edittodo = async (req, res) => {
  const { uid, todoId } = req.params;
  const { title } = req.body;

  if (!(uid && todoId)) return res.send({ msg: "Insufficient data" });

  try {
    const data = await TODO.findOne({ _id: uid });
    if (!data) return res.status(401).send({ msg: "Invalid uid" });
    const index = data.todo.findIndex((e) => e._id == todoId);
    data.todo[index].title = title;
    const editData = await data.save();
    return res.status(201).send({ msg: "sucess", todos: editData.todo });
  } catch (error) {
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = edittodo;
