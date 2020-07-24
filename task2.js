var axios = require("axios");
var express = require("express");
var app = express();
var newy = [];
app.get("/:category", function (req, res) {
  var url =
    "https://sv443.net/jokeapi/v2/joke/" + req.params.category + "?type=single";
  axios
    .get(url)
    .then(function (resp) {
      res.json(resp.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.listen(port, process.env.IP, function () {
  console.log("Server is listening!");
});
