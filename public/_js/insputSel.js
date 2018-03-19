const remote = require('electron').remote
const main = remote.require('./main.js')

var btncsv = document.getElementById("btn-csv");
var btnform = document.getElementById("btn-form");
var fecha = document.getElementById("sair");

fecha.addEventListener('click', function(event){
    var win = remote.getCurrentWindow();
    win.close();
});
btncsv.addEventListener('click', function(event){
    main.openWindow('csv', 1200  ,800)
    var win = remote.getCurrentWindow();
    win.close();
}, false);
btnform.addEventListener('click', function(event){
    
    main.openWindow('Formulario', 1255  ,800)
    var win = remote.getCurrentWindow();
    win.close();
}, false);