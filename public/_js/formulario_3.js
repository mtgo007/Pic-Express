// const remote = require('electron').remote
// const electron = require('electron')
// const ipcRenderer = electron.ipcRenderer;
// const main = remote.require('./main.js')
// const db = require('electron-db');


var estado = ['B-C','C-D', 'D-E', 'E-F', 'F-G', 'G-H', 'H-I', 'I-J', 'J-k'];
var count = 0;
var btnc = document.getElementById("btn-c");
var btnp = document.getElementById("btn-p");
var nfomr = document.getElementById("nform");
let title;

//Estrutura dos dados
let data ={
    perfilLongitudinal : [],
    dadosTransecto : {
        profTalvegue:[],
        largMolhada:[],
        largBarraCanalP:[],
        largBarraCanalX:[],
        sedimentoPeq:[],
        codUnidadeCanal:[],
        codFormaPiscina:[],
        canalLateral:[],
        backWater:[],
        Comentarios:[]
    },
    transecto : {
        esq:[],
        cEsq:[],
        cent:[],
        cDir:[],
        dir:[],
        obs:[]
    },
    madeiras : {
        DentroLeitoSaz :{
            1:[],
            5:[],
            15:[]
        },
        AcimaLeitoSaz :{
            1:[],
            5:[],
            15:[]
        }
    }
};

btnp.addEventListener('click', function(){
    if(count == 0){
        console.log('0')
        data['perfilLongitudinal'] = geraArr(154,155);
        //tabela maior
        data['dadosTransecto']['profTalvegue'] = geraArr(0,14);
        data['dadosTransecto']['largMolhada'] = geraArr(15,16);
        data['dadosTransecto']['largBarraCanalP'] = geraArr(17,31);
        data['dadosTransecto']['largBarraCanalX'] = geraArr(32,33);
        data['dadosTransecto']['sedimentoPeq'] = geraArr(34,48);
        data['dadosTransecto']['codUnidadeCanal'] = geraArr(49,63);
        data['dadosTransecto']['codFormaPiscina'] = geraArr(64,78);
        data['dadosTransecto']['canalLateral'] = geraArr(79,93);
        data['dadosTransecto']['backWater'] = geraArr(94,108);
        data['dadosTransecto']['Comentarios'] = geraArr(109,123);
        //transecto 7
        data['transecto']['esq'].push(document.getElementById(124).value);
        data['transecto']['cEsq'].push(document.getElementById(125).value);
        data['transecto']['cent'].push(document.getElementById(126).value);
        data['transecto']['cDir'].push(document.getElementById(127).value);
        data['transecto']['dir'].push(document.getElementById(128).value);
        data['transecto']['obs'].push(document.getElementById(129).value);
        //madeiras
        data['madeiras']['DentroLeitoSaz']['1'] = geraArr(130,133);
        data['madeiras']['DentroLeitoSaz']['5'] = geraArr(134,137);
        data['madeiras']['DentroLeitoSaz']['15'] = geraArr(138,141);
        //madeiras fora
        data['madeiras']['AcimaLeitoSaz']['1'] = geraArr(142,145);
        data['madeiras']['AcimaLeitoSaz']['5'] = geraArr(146,149);
        data['madeiras']['AcimaLeitoSaz']['15'] = geraArr(150,153);
        //muda estado
        count++;
        alteraEstado(count);
        // main.openWindow('formulario_4', 1400, 900);
        // fechaJanela();
    }
    else if(count<10){
        //get dados
        data['dadosTransecto']['profTalvegue']  = data['dadosTransecto']['profTalvegue'].concat(geraArr(0,14));
        data['dadosTransecto']['largMolhada'] = data['dadosTransecto']['largMolhada'].concat(geraArr(15,16));
        data['dadosTransecto']['largBarraCanalP'] = data['dadosTransecto']['largBarraCanalP'].concat(geraArr(17,31));
        data['dadosTransecto']['largBarraCanalX'] = data['dadosTransecto']['largBarraCanalX'].concat(geraArr(32,33));
        data['dadosTransecto']['sedimentoPeq'] = data['dadosTransecto']['sedimentoPeq'].concat(geraArr(34,48));
        data['dadosTransecto']['codUnidadeCanal'] = data['dadosTransecto']['codUnidadeCanal'].concat(geraArr(49,63));
        data['dadosTransecto']['codFormaPiscina'] = data['dadosTransecto']['codFormaPiscina'].concat(geraArr(64,78));
        data['dadosTransecto']['canalLateral'] = data['dadosTransecto']['canalLateral'].concat(geraArr(79,93));
        data['dadosTransecto']['backWater'] = data['dadosTransecto']['backWater'].concat(geraArr(94,108));
        data['dadosTransecto']['Comentarios'] = data['dadosTransecto']['Comentarios'].concat(geraArr(109,123));

        data['transecto']['esq'].push(document.getElementById(124).value);
        data['transecto']['cEsq'].push(document.getElementById(125).value);
        data['transecto']['cent'].push(document.getElementById(126).value);
        data['transecto']['cDir'].push(document.getElementById(127).value);
        data['transecto']['dir'].push(document.getElementById(128).value);
        data['transecto']['obs'].push(document.getElementById(129).value);

        //madeiras
        data['madeiras']['DentroLeitoSaz']['1'] = data['madeiras']['DentroLeitoSaz']['1'].concat(geraArr(130,133));
        data['madeiras']['DentroLeitoSaz']['5'] = data['madeiras']['DentroLeitoSaz']['5'].concat(geraArr(134,137));
        data['madeiras']['DentroLeitoSaz']['15'] = data['madeiras']['DentroLeitoSaz']['15'].concat(geraArr(138,141));
        //madeiras fora
        data['madeiras']['AcimaLeitoSaz']['1'] = data['madeiras']['AcimaLeitoSaz']['1'].concat(geraArr(142,145));
        data['madeiras']['AcimaLeitoSaz']['5'] = data['madeiras']['AcimaLeitoSaz']['5'].concat(geraArr(146,149));
        data['madeiras']['AcimaLeitoSaz']['15'] = data['madeiras']['AcimaLeitoSaz']['15'].concat(geraArr(150,153));



        count++;
        alteraEstado(count);
    }else{
        // salvaDados(title, dados);
        // main.openWindow('formulario_4', 1400, 900);
        // fechaJanela();
    }

});

btnc.addEventListener('click', function(){
    // fechaJanela();
});

function alteraEstado(num){
    document.getElementById("sel1").style.display = "none";
    nform.innerHTML = estado[num];
}

// function fechaJanela(){
//     var win = remote.getCurrentWindow();
//     win.close();
// }

// ipcRenderer.send('get-title', '*');
// ipcRenderer.once('title-reply', function(event, arg){
//     title = arg;
// });

// function salvaDados(titulo, obj){
//     db.insertTableContent(titulo, obj, (succ, msg) => {
//         // succ - boolean, tells if the call is successful
//         console.log("Success: " + succ);
//         console.log("Message: " + msg);
//     })
// }

function geraArr(ini, end){
    var arr = [];
    var count = 0;
    for(var i = ini;i<=end;i++){
        arr[count] = document.getElementById(i).value;
        count++;
    }
    return arr;
}
