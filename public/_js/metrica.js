const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const {webContents} = require('electron');
const app = electron.app;

window.$ = window.jQuery = require('./_js/jquery-3.2.1.min.js');

var campos = [];
var calculos = ["media", "mediana", "variancia", "desvio padrão"];


for(let i=0;i<7;i++){
  campos[i]= $("#i"+i);
}

$("#btn").click(metrica);

function media(data){
  let soma=0;
  for(let i =0;i<data.length;i++){
    soma = +soma + +data[i];
  }
  return (soma/data.length);
}

function sortfunction(a, b){
  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}

function mediana(data){
  data.sort(sortfunction);
  if(data.length%2==0){
    let n = data[data.length/2];
    let n1 = data[(data.length/2)-1];
    return (+n + +n1)/2;
  }else{
    return data[parseInt(data.length/2)];
  }
}

function variancia(data){
    var md = media(data);
    var soma = 0;
    for(let i =0;i<data.length;i++){
      let temp = (data[i] - md);
      soma+= Math.pow(temp,2);
    }
    return soma/data.length;
}

function desvpad(data){
  var vari = variancia(data);
  return Math.sqrt(vari);
}

function metrica(){


  let valores = [];
  for(let i =0;i<7;i++){
    if(campos[i].val()!=""){
      valores.push(campos[i].val());
    }
  }
  let resultados = [media(valores), mediana(valores), variancia(valores), desvpad(valores)];
  var imprime = "<table border=1 width=100%><tr>";
  for(let i =0;i<calculos.length;i++){
    //HTML += "<td align=center>"+String.fromCharCode(j+64)+"</td>";
    imprime += "<td align=center>"+calculos[i]+"</td>";
   }
   imprime += "</tr>";
  for(let i =0;i<resultados.length;i++){
    //HTML += "<td align=center>"+String.fromCharCode(j+64)+"</td>";
    imprime += "<td align=center>"+resultados[i]+"</td>";
   }
   imprime += "</tr></table>";
   $("#escreve").html(imprime);
}
