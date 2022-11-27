const user = require("../../config/appwrite.client");

const signinController = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(401).send({ msg: "Insufficient data" });
  }
};

module.exports = signinController;
