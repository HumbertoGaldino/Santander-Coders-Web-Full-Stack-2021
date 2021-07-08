class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};

const pessoa1 = new Pessoa ('Humberto', 25);

pessoa1.idade = 26;

console.log(pessoa1);

const pessoa2 = new Pessoa ('Gabriel', 34);

console.log(pessoa2);
