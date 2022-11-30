const TODO = require("../../model/user.model");
module.exports = addtodo = async (req, res) => {
  const { uid } = req.params;
  const { title } = req.body;
  const ifExist = await TODO.findOne({ _id: uid });
  //   console.log("Worked");
  if (ifExist) {
    try {
      ifExist.todo.push({ title: title });
      await ifExist.save();
      return res.send(ifExist);
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
    // console.log(ifExist);
  }
  try {
    const data = await TODO.create({
      _id: uid,
      todo: {
        title: title,
      },
    });
    return res.send(data);
  } catch (error) {
    return res.send({ msg: error.message });
  }
};
