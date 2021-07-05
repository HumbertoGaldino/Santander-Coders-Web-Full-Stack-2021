function escreva(texto){
    console.log("Olá! "+texto);
}

escreva('Humberto');

function somar(a,b){
    return a+b;
}

let resultado = somar(1,5);

console.log(resultado);

// Função Anônima
const somar2 = function(a,b){return a+b;}

console.log(somar2(13,9));


// Função de Flecha
const somar3 = (a,b) => a+b;

console.log(somar3(1,9));
