class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf){
        //é preciso fazer uma chamada do construtor da classe pessoa por ela definir os atributos da classe pai. Utilizamos então o super que faz mensão a classe superior
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao1 = new Cidadao('Humberto',26,'0000','1111');
console.log(cidadao1);

//Pensando em objetos como tipos de dados, podemos entender que um objeto cidadao tem 2 tipos, o tipo Pessoa e o tipo Cidadao. Nesse caso todo Cidadao é Pessoa mas nem toda Pessoa é Cidadao.

//Para sabermos os tipos de uma variável basta utilizar o operdador de JS instanceof

console.log(cidadao1 instanceof Cidadao);
console.log(cidadao1 instanceof Pessoa);

//Podemos entender que é possível a criação de uma classe filha que herda atributos de uma classe pai, porém não ficamos limitados a apenas uma, podemos criar diversas classes irmãs. Chamamos esse processo de Polimorfismo, onde uma classe pai da origem a outras classes filhas diferentes entre si.