const express = require("express");
const app = express();
const port = 8000;

const messages = [
  { user: "Иван", message: "Привет!" },
  { user: "Петр", message: "Привет!" },
  { user: "Екатерина", message: "Привет, ребята!" },
  { user: "Валентина", message: "Здравствуйте!" },
];

app.listen(port, () => {
  console.log(port);
});

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
    res.status(200).json('ok');
  });

app.get("/messages", (req, res) => {
  res.status(200).json(messages);
});

app.post("/messages", (req, res) => {
    res.status(201).json('ok');
});

app.post("/auth", (req, res) => {
  res.status(201).json('ok');
});