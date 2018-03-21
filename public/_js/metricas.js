let arr = [1,2,3,4,5,6,7,8];

let resultado = mediana(arr);

//requisição de dados
let data;

axios.get('/metricas/data')
  .then(function (response) {
    data = response.data;
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });



//Funçoes Algebricas
function mediana(arr){
    let newArr = ordenar(arr);
    if(newArr.length%2==0){
        let index = newArr.length/2;
        return media([newArr[index], newArr[index-1]]);
    } else{
        let index = Math.floor(newArr.length/2);
        console.log(index);
        return(newArr[index]);
    }
}

function ordenar(arr){
    return arr.sort(function(a, b){return a-b});
}

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