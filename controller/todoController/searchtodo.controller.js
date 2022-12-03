const TODO = require("../../model/user.model");

const searchtodo = async (req, res) => {
  console.log("Executed");
  const { uid, text } = req.params;
  if (!(uid && text)) return res.status(401).send({ msg: "Insufficient data" });

  try {
    const data = await TODO.findOne({ _id: uid });
    if (!data) return res.status(401).send({ msg: "Invalid uid" });
    const filterData = data.todo.filter((e) =>
      e.title.toLowerCase().includes(text.toLowerCase())
    );
    return res.status(200).send({ msg: "sucess", todos: filterData });
  } catch (error) {
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = searchtodo;
