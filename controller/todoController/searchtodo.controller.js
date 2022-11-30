const TODO = require("../../model/user.model");

const searchtodo = async (req, res) => {
  const { uid } = req.params;
  const { search } = req.body;
  if (!(uid && search))
    return res.status(401).send({ msg: "Insufficient data" });

  try {
    const data = await TODO.findOne({ _id: uid });
    const filterData = data.todo.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase())
    );
    return res.status(200).send(filterData);
  } catch (error) {
    return res.status(401).send({ msg: error.message });
  }
};

module.exports = searchtodo;
