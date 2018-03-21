var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var app = express()
var mongojs = require('mongojs')
var db = mongojs('pic', ['rios'])

var data ={}

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

app.post("/add/f1",function(req, res){
    console.log(req.body);
    data['f1'] = req.body;
    res.send('/add/f2');
})

app.get("/add/f2",function(req, res){
    console.log("f2");
    res.sendFile(path.join(__dirname, '/public/formulario_2.html'));
})

app.post("/add/f2",function(req, res){
    console.log(req.body);
    data['f2'] = req.body;
    res.send('/add/f3');
})

app.get("/add/f3",function(req, res){
    console.log("f3");
    res.sendFile(path.join(__dirname, '/public/Formulario_3.html'));
})

app.post("/add/f3",function(req, res){
    console.log(req.body);
    data['f3'] = req.body;
    res.send('/add/f4');
})

app.get("/add/f4",function(req, res){
    console.log("f4");
    res.sendFile(path.join(__dirname, '/public/formulario_4.html'));
})

app.post("/add/f4",function(req, res){
    console.log(req.body);
    data['f4'] = req.body;
    res.send('/add/f5');
})

app.get("/add/f5",function(req, res){
    console.log("f5");
    res.sendFile(path.join(__dirname, '/public/formulario_5.html'));
})

app.post("/add/f5",function(req, res){
    console.log(req.body);
    data['f5'] = req.body;
    res.send('/add/f6');
})

app.get("/add/f6",function(req, res){
    console.log("f6");
    res.sendFile(path.join(__dirname, '/public/formulario_6.html'));
})

app.post("/add/f6",function(req, res){
    console.log(req.body);
    data['f6'] = req.body;
    db.rios.insert(data);
    data = {};
    res.send('/');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  