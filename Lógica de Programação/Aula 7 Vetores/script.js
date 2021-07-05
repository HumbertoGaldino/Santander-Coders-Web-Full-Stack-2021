let vetor = [10,20,30,40,50];

vetor[2] = 60;

let vetor2 = [];

for (let i = 0; i < 10; i++){
    vetor2.push(i); 
}

// for (let i = 0; i < vetor2.length; i ++){
//     console.log(vetor2[i]);
// }

//retorna o valor do elemento
for (let numero of vetor){
    console.log(numero);
}

//retorna o indice do elemento
for (let indice in vetor){
    console.log(vetor[indice]);
}


let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (let linha of matriz){
    for (let dado of linha){
        console.log(dado);
    }
}
