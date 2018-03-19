let btn = document.getElementById('btn-p');
let btnc = document.getElementById('btn-c');

let data = {};

btn.addEventListener('click', ()=>{
    data['residencial'] = geraArr(0,7);
    data['recreativo'] = geraArr(8,12);
    data['agricola'] = geraArr(13,19);
    data['industrial'] = geraArr(20,27);
    data['IntervencaoRiacho'] = geraArr(28,35);

    data['CaracteristicasDoCorpoDAagua'] = {
        natural: document.getElementById('36').value,
        agradavel: document.getElementById('37').value
    }

    data['UsoDoSolo'] = {
        natural: document.getElementById('38').value,
        agradavel: document.getElementById('39').value
    }

    data['CondicoesAtm'] = document.getElementById('40').value;
    data['AvaliacaoGeral'] = document.getElementById('41').value;

    console.log(data);
});

function geraArr(ini, end){
    var arr = [];
    var count = 0;
    for(var i = ini;i<=end;i++){
        arr[count] = document.getElementById(i).value;
        count++;
    }
    return arr;
}