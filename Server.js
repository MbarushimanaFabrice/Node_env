const routers = require("./routers");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/", routers);

const Port = 3111;
app.listen(Port, (error) => {
  if (error) throw error;
  console.log(`Server runing on Port ${Port}`);
});
