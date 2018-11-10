require("/data/friends.js");
module.exports= function(app){
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  app.get("/routing", function(req, res) {
    return res.json(friends);
  });


  app.get("/data/friends/:friend", function(req, res) {
    var chosen = req.params.friends;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  })};


  
