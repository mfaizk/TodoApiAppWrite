const TODO = require("../../../model/user.model");

const searchtask = async (req, res) => {
  const { uid, todoId, search } = req.params;
  const {} = req.body;
  if (!(uid && todoId && search))
    return res.status(401).send({ msg: "Insufficient data" });

  try {
    const data = await TODO.findOne({ _id: uid });
    const todoIndex = data.todo.findIndex((e) => e._id == todoId);
    if (todoIndex == -1)
      return res.status(401).send({ msg: "Invalid Todo Id" });
    const searchData = data.todo[todoIndex].task.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase())
    );
    return res.status(200).send({ msg: "sucess", task: searchData });
  } catch (error) {
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = searchtask;
