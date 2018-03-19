
const app = require('electron').remote;
const dialog = app.dialog;
const fs = require('fs');
var csv = require("fast-csv");

var procura = document.getElementById('btn-search');
var log = document.getElementById('btn-log');
var dados = [];

var content;



procura.addEventListener('click',()=>{
    dialog.showOpenDialog((filename)=>{
        if(filename === undefined){
            alert("no file selected");
        }else{
            readFile(filename[0]);
        }
    });
});

log.addEventListener('click',()=>{
    var csvconv = csv
        .fromString(content, {headers: true,quoteColumns: true})
        .validate(function(data){
            //console.log(data);
             //all persons must be under the age of 50
             return data;
        })
        .on("data-invalid", function(data){
            //do something with invalid row
        })
        .on("data", function(data){
            //console.log(data);
            
        })
        .on("end", function(){
            //console.log("done");
            
        });

        console.log(csvconv.fromString);
        
});

function readFile(filepath){
    fs.readFile(filepath, 'utf-8', (err, data) =>{
        if(err){
            alert("Erro");
        }
        content = data;
        
        // dados = content.split("\n");
        // dados = content.split(" ");
        dados = content.split(",");
        console.log(dados);
    });
}

