const TODO = require("../../model/user.model");

const deletetodo = async (req, res) => {
  const { uid, todoId } = req.params;
  // console.log("reached");

  try {
    const data = await TODO.findOne({ _id: uid });
    if (!data) return res.status(401).send({ msg: "Invalid id" });
    const index = data.todo.findIndex((e) => e._id == todoId);
    if (index == -1) return res.status(401).send({ msg: "No todo found" });
    // console.log(index);
    data.todo.splice(index, 1);
    const modData = await data.save();
    return res.status(201).send({ msg: "sucess", todos: modData.todo });
  } catch (error) {
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = deletetodo;
