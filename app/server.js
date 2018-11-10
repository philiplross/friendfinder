var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require("body-parser");
var PORT = 8081;

// heroku implemtaion area to connect database online

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
  })


// app.listen(require.bodyParser)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
  