const mongoose = require("mongoose");
const config = require("../config/env.config");
const connect = () => {
  // console.log(config.MONGO_DB_URI);
  mongoose.connect(config.MONGO_DB_URI, {}, (e) => {
    if (e) console.log("Error occured", e.message);
    console.log("MONGODB CONNECTED");
  });
};
module.exports = connect;
