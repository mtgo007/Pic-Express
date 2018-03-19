let selImg = document.getElementById('selimg');
let img = document.getElementById('img');
let btn = document.getElementById("btn-p");
let data = {};

selImg.addEventListener('change', ()=>{
    let val = selImg.value;
    if(val == "Vale em «V» raso"){
        img.src = "./_img/Rios/Raso.jpg";
    }
    if(val == "Vale em «V» profundo"){
        img.src = "./_img/Rios/Profundo.jpg";
    }
    if(val == "Garganta"){
        img.src = "./_img/Rios/Garganta.jpg";
    }
    if(val == "Concavo/abaulado"){
        img.src = "./_img/Rios/Concavo.jpg";
    }
    if(val == "Vale assimétrico"){
        img.src = "./_img/Rios/Assimetrico.jpg";
    }
    if(val == "Vale em «U»"){
        img.src = "./_img/Rios/U.jpg";
    }
    if(val == "Vale não perceptível"){
        img.src = "./_img/Rios/NaoPerceptivel.jpg";
    }
});

btn.addEventListener('click', ()=>{
    data['chPad'] = document.getElementById(0).value;
    data['encaixamentoCH'] = selImg.value;
    data['caracEncaixamento'] = document.getElementById(1).value;
    data['porcentagemCH'] = document.getElementById(2).value;
    data['larSaz'] = document.getElementById(3).value;
    data['largVale'] = document.getElementById(4).value;
    data['bordasVale'] = document.getElementById(5).checked;
    console.log(data);
});