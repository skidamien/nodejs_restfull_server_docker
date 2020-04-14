var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
    res.json({ message: "hello world" });
    console.log("A client called at /hello");
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Hello world app listening at http://%s:%s", host, port)
})
