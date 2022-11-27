const app = require("./app");
require("./config/db")();
const config = require("./config/env.config");
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
app.listen(config.PORT, () => {
  console.log("Server Started");
});
