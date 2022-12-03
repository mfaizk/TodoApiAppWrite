const TODO = require("../../model/user.model");
module.exports = addtodo = async (req, res) => {
  const { uid } = req.params;
  const { title } = req.body;
  const ifExist = await TODO.findOne({ _id: uid });
  //   console.log("Worked");
  if (ifExist) {
    try {
      ifExist.todo.push({ title: title });
      const data = await ifExist.save();
      // console.log(data.todo);
      return res.send({ sucess: true, todos: data.todo });
    } catch (error) {
      return res.status(401).send({ msg: error.message, sucess: false });
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
    return res.send({ sucess: true });
  } catch (error) {
    return res.send({ msg: error.message, sucess: false });
  }
};
