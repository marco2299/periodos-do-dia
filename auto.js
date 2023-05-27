var cont = 0;
function manha() {
    iniciar(7, cont);
}

function tarde() {
    iniciar(17, cont);
}

function noite() {
    iniciar(19, cont);
}
function madrugada(){
    iniciar(4, cont);
}

function iniciar(x, cont) {
var tempo = new Date();
var hora = tempo.getHours();
var txt = document.getElementById("txt");
var minutos = tempo.getMinutes();
var img = document.getElementById('bom');
    if(cont === 0){
        hora = x;
    }

    if(minutos < 10){
        txt.innerText = ` Olá! Agora são exatamente ${hora}:0${minutos}`;
    }
    else{
        txt.innerText = `Olá! Agora são exatamente ${hora}:${minutos}`;
    }
    if(hora >= 6 && hora < 12){
        txt.innerHTML += `<br> </p> Bom dia!`;
        img.src = "imagens/dia.jpg";
        document.body.style.backgroundColor = 'rgba(71, 143, 250, 0.712)';
    }
    else if(hora >= 12 && hora < 18){
        txt.innerHTML += `<br> </p> Boa Tarde!`;
        img.src = "imagens/tarde.jpg";
        document.body.style.backgroundColor = 'rgba(255, 117, 4, 0.705)';
    }
    else if(hora >= 18 && hora < 24){
        txt.innerHTML += `<br> </p> Boa Noite!`;
        img.src = "imagens/noite.jpg";
        document.body.style.backgroundColor = 'rgba(27, 17, 105, 0.925)';
    }
    else{
        txt.innerHTML += `<br> </p> Boa Madrugada!`;
        img.src = "imagens/cat.jpg";
        document.body.style.backgroundColor = 'rgba(14, 10, 44, 0.925)';
    }
}
