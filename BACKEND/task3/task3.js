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
app.get("/forms", (req, res) => {
  res.render("forms");
});

app.post("/forms", (req, res) => {
  const data = req.body;
  arr1.push(data);
  res.redirect("/preview");
});

app.get("/preview", (req, res) => {
  arr1.sort((a, b) =>
    (b.Math + b.English) / 2 > (a.Math + a.English) / 2 ? 1 : -1
  );
  res.send(arr1);
});

/////////////////////
// Start Listening //
/////////////////////

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.listen(port, host, function () {
  console.log("Server is listening!");
});
