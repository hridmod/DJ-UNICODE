const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/task4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db!"));
/////////////////
// Express App //
/////////////////

const app = express();
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//MODEL
const Student = mongoose.model("details", {
  first_name: String,
  last_name: String,
  Maths: Number,
  English: Number,
});

//ROUTES
app.get("/forms", (req, res) => {
  res.render("forms");
});

app.post("/forms", (req, res) => {
  const data = req.body;
  Student.create(data).then((document) => {
    res.redirect("/preview/" + document.id);
  });
});

app.get("/preview/:id", (req, res) => {
  const id = req.params.id;

  Student.findById(id)
    .then((document) => {
      const data = document.toObject();

      res.render("preview", data);
    })
    .catch((error) => console.log("Unknown id", id));
});
/////////////////////
// Start Listening //
/////////////////////

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.listen(port, host, function () {
  console.log("Server is listening!");
});
