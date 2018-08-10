const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const Schema = mongoose.Schema;

const harta = async () => {
  try {
    mongoose.connect(
      "mongodb://localhost:27017/consultantHelper",
      { useNewUrlParser: true }
    );
  } catch (error) {
    console.log("error", error);
  }
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("nigga");
    let useDataSchema = new Schema({
      firstName: String,
      lastName: String
    });
    let Student = mongoose.model("student", useDataSchema);
    Student.find({}, (err, data) => {
      console.log(data);
    });
  });
};

harta();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("listening on port ", port));
