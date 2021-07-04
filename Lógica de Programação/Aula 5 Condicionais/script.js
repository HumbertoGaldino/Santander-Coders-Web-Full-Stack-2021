let estaSol = true;

if(estaSol){
    console.log("Vou para a praia.");
} else {
    console.log("Vou para o campo.");
}

let numero = 0;

if (numero > 0){
    console.log("Numero Positivo");
} else if (numero == 0){
    console.log("O número é zero");
} else {
    console.log("Número Negativo")
}

let numero2 = 74;
let paridade = numero2 % 2 === 0 ? 'Par' : 'Ímpar';
console.log(paridade);

let sinal = 'vermelho';

switch (sinal){
    case 'verde':
        console.log("Pode passar!");
        break;
    case 'amarelo':
        console.log("Atenção! Sinal prestes a fechar, cuidado!");
        break;
    case 'vermelho':
        console.log("Fechado! Não passe!");
        break;
    default:
        console.log("Sinal Inválido!");
        break;
}