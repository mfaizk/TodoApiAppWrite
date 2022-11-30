const TODO = require("../../model/user.model");

const gettodo = async (req, res) => {
  const { uid, sort } = req.params;
  if (!uid) return res.status(401).send({ msg: "Insufficient data" });

  if (sort == "default") {
    try {
      const data = await TODO.findOne({ _id: uid });
      if (!data) return res.status(401).send({ msg: "Invalid userID" });

      return res.status(200).send(data.todo);
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  } else if (sort == "ctime") {
    try {
      const data = await TODO.findOne({ _id: uid });
      if (!data) return res.status(401).send({ msg: "Invalid userID" });
      const sortedData = data.todo.sort((x, y) => x.createdAt - y.createdAt);
      return res.status(200).send(sortedData);
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  } else if (sort == "uptime") {
    try {
      const data = await TODO.findOne({ _id: uid });
      if (!data) return res.status(401).send({ msg: "Invalid userID" });
      const sortedData = data.todo.sort((x, y) => x.updatedAt - y.updatedAt);
      return res.status(200).send(sortedData);
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  }
};

module.exports = gettodo;
