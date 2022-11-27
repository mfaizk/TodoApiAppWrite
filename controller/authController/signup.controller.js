const user = require("../../config/appwrite.client");
const { ID } = require("node-appwrite");

const signupController = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) res.status(401).send({ msg: "Insufficient data" });

  let promise = user.create(ID.unique(), email, null, password, null);
  promise.then(
    function (response) {
      console.log(response);
      res.status(201).send(response);
    },
    function (error) {
      console.log(error);
      res.status(401).send(error.message);
    }
  );
};

module.exports = signupController;
