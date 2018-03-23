//requisição de dados
let data;
let metricas = {
    f2:{},
    f3:{},
    derivadas:{}
}

axios.get('/metricas/data')
  .then(function (response) {
    data = response.data;
    // console.log(data);
    let f2 = data["f2"];
    let f3 = data["f3"];

    console.log(f2);
    console.log(f3);
    //f2
    //medias
    metricas["f2"]['XDEPTH_S'] = media(f2['infoDoSub']['prof']);
    metricas["f2"]['XBAR'] = media(sliceArr(3, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas["f2"]['XBKF_W'] = media(sliceArr(4, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas["f2"]['XBKF_H'] = media(sliceArr(5, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas["f2"]['XINC_H'] = media(sliceArr(6, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas["f2"]['MEDIA_10'] = media(sliceArr(2, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas['f2']['XBKA'] = media(f2['medidasMargem']['anguloMargem']['dir'].concat(f2['medidasMargem']['anguloMargem']['esq']));
    metricas['f2']['XUN'] = media(sliceArr(0,f2['medidasMargem']['margemEscavada']['dist'],7).concat(sliceArr(1,f2['medidasMargem']['margemEscavada']['dist'],7)));
    //Desvios Padrões
    metricas["f2"]['SDDEPTH_S'] = desvioPadrao(f2['infoDoSub']['prof']);
    metricas["f2"]['SDBKF_W'] = desvioPadrao(sliceArr(4, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas["f2"]['SDBKF_H'] = desvioPadrao(sliceArr(5, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas["f2"]['SDINC_H'] = desvioPadrao(sliceArr(6, f2['medidasMargem']['margemEscavada']['dist'], 7));
    metricas['f2']['SDBKA'] = desvioPadrao(f2['medidasMargem']['anguloMargem']['dir'].concat(f2['medidasMargem']['anguloMargem']['esq']));
    metricas['f2']['SDUN'] = desvioPadrao(sliceArr(0,f2['medidasMargem']['margemEscavada']['dist'],7).concat(sliceArr(1,f2['medidasMargem']['margemEscavada']['dist'],7)));
    metricas["f2"]['DESVPAD_10'] = desvioPadrao(sliceArr(2, f2['medidasMargem']['margemEscavada']['dist'], 7));

    //f3
    //medias
    metricas['f3']['XWIDTH'] = media(f3['dadosTransecto']['largMolhada']);
    metricas['f3']['XDEPTH_T'] = media(f3['dadosTransecto']['profTalvegue']);
    //Desvios Padrões
    metricas['f3']['SDWIDTH'] = desvioPadrao(f3['dadosTransecto']['largMolhada']);
    metricas['f3']['SDDEPTH_T'] = desvioPadrao(f3['dadosTransecto']['profTalvegue']);
    
    //Derivadas
    //f2
    metricas['derivadas']['XBKF_D/XDEPTH_T'] = metricas["f2"]['XBKF_H'] / (metricas['f3']['XDEPTH_T']/100);
    metricas['derivadas']['XBKF_D'] = (metricas['f3']['XDEPTH_T']/100) + metricas["f2"]['XBKF_H'];
    metricas['derivadas']['XBFWD_RAT'] = metricas["f2"]['XBKF_W']/metricas['derivadas']['XBKF_D'];
    metricas['derivadas']['XWXD_P'] = metricas["f2"]['MEDIA_10'] * (metricas["f2"]['XDEPTH_S']/100)
    metricas['derivadas']['SDWXD_P'] = metricas["f2"]['SDDEPTH_S']/100;
    metricas['derivadas']['XWD_RAT_P'] = metricas["f2"]['MEDIA_10'] / (metricas["f2"]['XDEPTH_S']/100);
    metricas['derivadas']['XWD_RAT_P'] = metricas["f2"]['DESVPAD_10'] / (metricas["f2"]['SDDEPTH_S']/100);
    //f3
    metricas['derivadas']['XWXD'] = metricas['f3']['XDEPTH_T'] / (100 * metricas['f3']['XWIDTH']);
    metricas['derivadas']['XWD_RAT'] = metricas['f3']['XWIDTH'] / (metricas['f3']['XDEPTH_T']/100);

    console.log(metricas);
})
  .catch(function (error) {
    console.log(error);
  });

function sliceArr(ini ,arr, inc){
    let newArr = [];
    let val = inc;
    let index = ini;
    while(index <= arr.length-1){
        newArr.push(arr[index]);
        index = index + inc;
    }
    return newArr;
};
    
  


//Funçoes Algebricas

function media(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += parseFloat(element);
    });
    return sum/arr.length;
}

function variancia(arr){
    let md;
    md = media(arr);
    let sum = 0;

    arr.forEach(element => {
        sum += Math.pow((parseFloat(element) - md), 2);
    });

    return sum/arr.length;
}
function desvioPadrao(arr){
    let vari = variancia(arr);
    return Math.sqrt(vari);
}