const vetor = ['10', '20', '30'];

//converter o vetor para número
const stringToInt = (x) => parseInt(x);

//passando para o map mapear o vetor
const vetor2 = vetor.map(stringToInt);

console.log(vetor2);

//vetor ao quadrado
const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);