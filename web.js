var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(buf.toString(fs.readFile('index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

