const express = require("express");
const bodyParser = require("body-parser");

/////////////////
// Express App //
/////////////////

const app = express();
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//TRIAL
var arr1 = [];
//ROUTES
app.get("/", function (req, res) {
  res.redirect("/forms");
});
app.get("/forms", (req, res) => {
  let student;
  res.render("forms", { arr1: arr1, student: student });
});

app.post("/forms", (req, res) => {
  arr1.push({
    firstName: req.body.student.first_name,
    lastName: req.body.student.last_name,
    score: { Maths: req.body.student.Maths, English: req.body.student.English },
  });
  arr1.sort((a, b) =>
    (b.score.Maths + b.score.English) / 2 >
    (a.score.Maths + a.score.English) / 2
      ? 1
      : -1
  );
  console.log(arr1);
  res.render("preview", { arr1: arr1 });
});

app.get("/preview", (req, res) => {
  res.render("preview", { arr1: arr1 });
});

/////////////////////
// Start Listening //
/////////////////////

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.listen(port, host, function () {
  console.log("Server is listening!");
});
