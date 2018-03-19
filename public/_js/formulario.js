// const remote = require('electron').remote
// const electron = require('electron')
// const ipcRenderer = electron.ipcRenderer;
// const main = remote.require('./main.js')
// const db = require('electron-db');

var cancela = document.getElementById('btn-c');
var proximo = document.getElementById('btn-n');

var elementos = {};


proximo.addEventListener('click', () =>{
    var title = document.getElementById('i0').value;
    for (let i =0;i<33;i++){
            elementos[i] = (document.getElementById('i'+i).value);
    }
    console.log(elementos);

    // criaTabela(title);
    // salvaDados(title, elementos);    



    // ipcRenderer.send('set-title', title);

    // main.openWindow('formulario_2', 1400, 900);

    
    // var win = remote.getCurrentWindow();
    // win.close();
})


cancela.addEventListener('click', ()=>{
    // var win = remote.getCurrentWindow();
    // win.close();
})

// function criaTabela(titulo){
//     db.createTable(titulo, (succ, msg) => {
//         // succ - boolean, tells if the call is successful
//         console.log("Success: " + succ);
//         console.log("Message: " + msg);
//     })
// }

// function salvaDados(titulo, obj){
//     db.insertTableContent(titulo, obj, (succ, msg) => {
//         // succ - boolean, tells if the call is successful
//         console.log("Success: " + succ);
//         console.log("Message: " + msg);
//     })
// }