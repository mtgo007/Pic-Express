var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var app = express()
app.use('/public', express.static(path.join(__dirname + '/public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//public express



//router
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get("/add/f1",function(req, res){
    console.log("f1");
    res.sendFile(path.join(__dirname, '/public/Formulario.html'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  