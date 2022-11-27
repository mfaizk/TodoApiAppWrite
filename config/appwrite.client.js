const { Client, Users } = require("node-appwrite");
const config = require("../config/env.config");

const client = new Client()
  .setEndpoint(config.APP_WRITE_CLIENT)
  .setProject(config.APP_WRITE_PROJECT_ID)
  .setKey(config.APP_WRITE_API_KEY)
  .setSelfSigned();

const user = new Users(client);
module.exports = user;
