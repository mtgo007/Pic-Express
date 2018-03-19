// // const remote = require('electron').remote
// // const electron = require('electron')
// // const ipcRenderer = electron.ipcRenderer;
// // const main = remote.require('./main.js')
// // const db = require('electron-db');


// // var title;

function setEstado(value){
    nform.innerHTML = estado[value];
}
//end structure
var nform = document.getElementById("nform");

var estado = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "k"];

var data ={
  infoDoSub : {
    distMEsq:[],
    prof:[],
    cod:[],
    imersao:[],
    tipo:[],
    obs:[]
  },
  abrigoPeixes:{
    valores:[],
    obs:[],
  },
  estimativasZnRip:{
    margemEsq:[],
    margemDir:[],
    obs:[]
  },
  medidasMargem:{
    anguloMargem:{
      esq:[],
      dir:[]
    },
    margemEscavada:{
      dist:[],
      obs:[]
    }
  },
    medidaDossel:{
      centroMontante:[],
      centroEsquerda:[],
      centroJusante:[],
      centroDireita:[],
      esq:[],
      dir:[],
      obs:[]
    },
    influenciaHumana:{
      margemEsq:[],
      margemDir:[],
      obs:[]
    }
  };




var count =0;
var btn = document.getElementById("btn-p");
// // var btc = document.getElementById("btn-c");

btn.addEventListener('click', ()=>{
    if(count<=10){
      //INFORMAÇÕES DO SUBSTRATO DA SEÇÃO TRANSVERSAL
      data['infoDoSub']['distMEsq'] = data['infoDoSub']['distMEsq'].concat(geraArr(0,4));
      data['infoDoSub']['prof'] = data['infoDoSub']['prof'].concat(geraArr(5,9));
      data['infoDoSub']['cod'] = data['infoDoSub']['cod'].concat(geraArr(10,14));
      data['infoDoSub']['imersao'] = data['infoDoSub']['imersao'].concat(geraArr(15,19));
      data['infoDoSub']['tipo'] = data['infoDoSub']['tipo'].concat(geraArr(20,24));
      data['infoDoSub']['obs'] = data['infoDoSub']['obs'].concat(geraArr(25,29));
      //ABRIGO PARA PEIXES/OUTROS
      data['abrigoPeixes']['valores'] = data['abrigoPeixes']['valores'].concat(geraArr(30,33));
      data['abrigoPeixes']['valores'].push(document.getElementById(131).value);
      data['abrigoPeixes']['valores'] = data['abrigoPeixes']['valores'].concat(geraArr(34,38));
      data['abrigoPeixes']['obs'] = data['abrigoPeixes']['obs'].concat(geraArr(39,48));
      //ESTIMATIVAS VISUAIS DA ZONA RIPÁRIA
      data['estimativasZnRip']['margemEsq'] = data['estimativasZnRip']['margemEsq'].concat(geraArr(49,55));
      data['estimativasZnRip']['margemDir'] = data['estimativasZnRip']['margemDir'].concat(geraArr(56,62));
      data['estimativasZnRip']['obs'] = data['estimativasZnRip']['obs'].concat(geraArr(63,69));
      //MEDIDAS DA MARGEM
      data['medidasMargem']['anguloMargem']['esq'].push(document.getElementById(70).value);
      data['medidasMargem']['anguloMargem']['dir'].push(document.getElementById(71).value);
      data['medidasMargem']['margemEscavada']['dist'] = data['medidasMargem']['margemEscavada']['dist'].concat(geraArr(72,78));
      data['medidasMargem']['margemEscavada']['obs'] = data['medidasMargem']['margemEscavada']['obs'].concat(geraArr(79,85));
      //MEDIDAS DA COBERTURA DO DOSSEL
      data['medidaDossel']['centroMontante'].push(document.getElementById(86).value);
      data['medidaDossel']['centroEsquerda'].push(document.getElementById(87).value);
      data['medidaDossel']['centroJusante'].push(document.getElementById(88).value);
      data['medidaDossel']['centroDireita'].push(document.getElementById(92).value);
      data['medidaDossel']['esq'].push(document.getElementById(93).value);
      data['medidaDossel']['dir'].push(document.getElementById(94).value);
      data['medidaDossel']['obs'] = data['medidaDossel']['obs'].concat(geraArr(89,91));
      data['medidaDossel']['obs'] = data['medidaDossel']['obs'].concat(geraArr(95,97));
      //INFLUÊNCIA HUMANA
      data['influenciaHumana']['margemEsq'] = data['influenciaHumana']['margemEsq'].concat(geraArr(98,108));
      data['influenciaHumana']['margemDir'] = data['influenciaHumana']['margemDir'].concat(geraArr(109,119));
      data['influenciaHumana']['obs'] = data['influenciaHumana']['obs'].concat(geraArr(120,130));

        //altera estado
        count++;
        setEstado(count);

//         // main.openWindow('formulario_3', 1400, 900);
//         // var win = remote.getCurrentWindow();
//         // win.close();
    }else{
//     //     // salvaDados(title, dados);
//     //     // main.openWindow('formulario_3', 1400, 900);
//     //     // var win = remote.getCurrentWindow();
//     //     // win.close();
    }
})

// // btc.addEventListener('click', ()=>{
// //     // var win = remote.getCurrentWindow();
// //     // win.close();
// // })


// // ipcRenderer.send('get-title', '*');
// // ipcRenderer.once('title-reply', function(event, arg){
// //     title = arg;
// // });





function geraArr(ini, end){
    var arr = [];
    var count = 0;
    for(var i = ini;i<=end;i++){
        arr[count] = document.getElementById(i).value;
        count++;
    }
    return arr;
}
