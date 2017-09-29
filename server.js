var express = require('express');
var app = express();
var port = 8080;
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.send("Server Running");
});
app.listen(port, function() {
  console.log('Open on ' + port);
});
module.exports = app;
