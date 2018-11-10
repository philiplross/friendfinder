var express = require("express");

var path = require("path");

var app = express();


// heroku implemtaion area to connect database online

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


function handleRequest(request, response){

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  })
};


  