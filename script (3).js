function saibaMais(){
document.getElementById("sobre")
.scrollIntoView({behavior:"smooth"});
}

function animar(id, valor){

let numero = 0;

let intervalo = setInterval(() => {

numero++;

document.getElementById(id).textContent = numero;

if(numero >= valor){
clearInterval(intervalo);
}

}, 30);
}

window.onload = () => {

animar("n1", 70);
animar("n2", 55);
animar("n3", 85);

};
