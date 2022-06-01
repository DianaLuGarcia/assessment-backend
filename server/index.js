const express = require("express");
const cors = require("cors");
const app = express();
const answers = [];
app.use(cors());
app.use(express.json());
app.listen(4000, () => console.log("Server running on 4000"));

const myToDos = [
  { id: 1, text: "Answer:", questionAnswer },
  { id: 2, text: "Answer:", questionAnswer },
  { id: 3, text: "Answer:", questionAnswer },
  { id: 4, text: "Answer:", questionAnswer },
];

const { getCompliment } = require("./controller");
app.get("/api/compliment", getCompliment);

const { getFortune } = require("./controller");
app.get("/api/fortune", getFortune);

app.get("/api/answers", (req, res) => {
  res.status(200).send(answers);
});

app.post("/api/theAnswers", (req, res) => {
  answers.push({ id, test: questionAnswer });
  res.status(200);
});

app.delete("/api/answers", (req, res) => {
  const { id } = req.params;
  const deleteIndex = myToDos.findIndex((todo) => +todo.id === +id);
  answers.splice(deleteIndex.length);
  res.status(200).send(myToDos);
});
