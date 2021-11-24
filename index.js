const express = require("express");
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to CI/CD Exercise of CS1011");
});

app.listen(port, () => {
  console.log("Server is listening");
});
module.exports = app;
