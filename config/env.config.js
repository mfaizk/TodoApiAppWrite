require("dotenv").config();

const config = {
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  PORT: process.env.PORT || 4100,
  APP_WRITE_CLIENT: process.env.APP_WRITE_CLIENT,
  APP_WRITE_PROJECT_ID: process.env.APP_WRITE_PROJECT_ID,
  APP_WRITE_API_KEY: process.env.APP_WRITE_API_KEY,
};

module.exports = config;
