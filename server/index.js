const express = require("express");
const cors = require("cors");
const app = express();
const answers = [];
app.use(cors());
app.use(express.json());
app.listen(4000, () => console.log("Server running on 4000"));

const { getCompliment } = require("./controller");
app.get("/api/compliment", getCompliment);

const { getFortune } = require("./controller");
app.get("/api/fortune", getFortune);

app.get("/api/answers", (req, res) => {
  res.status(200).send(answers);
});

app.post("/api/answers", (req, res) => {
  answers.push({ id, text: todo });
  res.status(200);
  id++;
});
