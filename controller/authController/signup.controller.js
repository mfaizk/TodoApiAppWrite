const user = require("../../config/appwrite.client");
const { ID } = require("node-appwrite");

const signupController = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(401).send({ msg: "Insufficient data" });
  }

  let promise = user.create(ID.unique(), email, null, password, null);
  promise.then(
    (response) => {
      res.status(201).send({
        email: response.email,
        id: response.$id,
      });
    },
    (error) => {
      // console.log(error);
      res.status(error.code).send({ msg: error.message });
    }
  );
};

module.exports = signupController;
