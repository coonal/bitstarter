var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var inputfile = "index.html";

var readfile = function(){
    var data = fs.readFileSync(inputfile);
    return data.toString();
};

app.get('/', function(request, response) {
    var outdata = readfile();
  response.send(outdata);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
