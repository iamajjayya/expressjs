import express from "express";
import data from "./Data/MOCK_DATA.json" assert { type: "json" };

const app = express();
const PORT = 3000;

// app.use(express.static("public"))


// app.use(express.static("public", "index2.html"))

// app.use("/public" , express.static("public","index2.html"))


//GET METHOD
app.get("/", (req, res) => {
  res.json(data)
});

//POST METHOD
app.post("/create", (req, res) => {
  res.send(" This  is a POST Request Method POST /");
});

//PUT METHOD
app.put("/edit", (req, res) => {
  res.send(" This  is a PUT Request Method PUT /");
});

//DELETE METHOD
app.delete("/delete", (req, res) => {
  res.send(" This  is a DELETE Request Method DELETE /");
});

app.listen(PORT, () => {
  console.log(`APP IS RUNNING IN PORT ${PORT}`);
  console.log(data);
});
