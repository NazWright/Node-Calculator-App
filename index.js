const express = require("express");
const app = express();
port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + public);
});

app.post("/", (req, res) => {
  let equation = req.body.equation;
  console.log(equation);
  let result = eval(equation);
  res.status(200).send("Result is " + result);
});

app.listen(port, () => {
  console.log("Hosted on port: " + port);
});
