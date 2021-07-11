class Quadrado{

    constructor(lado, altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => {return cor;}; //permite visualizar o valor de cor
        this.setCor = (novaCor) => {cor = novaCor;} //permite alterar o valor de cor
    }
}

const quadrado = new Quadrado(3,4); //cria-se a instância do objeto

quadrado.setCor('red'); //altera o valor de cor do objeto

console.log(quadrado.getCor());

//Foi possível visualizar o valor da variável cor através do getCor, para alterar o valor de cor foi criado o método setCor, desta forma ao utilizar o console.log(quadrado.getCor()) podemos visualizar que o valor da variável foi alterado pelo método setCor(). Dessa maneira é possível ler e escrever nesse atributo privado do objeto.

//Porém essa maneira possuí duas limitações. Primeiro porque é necessário declarar todos os métodos dentro do construtor e além disso não é possível impedir que o usuário declare um atributo cor novamente. Sendo assim o primeiro atributo cor não é alterado e um novo atributo cor é declarado possuíndo dois atributos para a mesma informação com valores possívelmente diferentes.

//Para impedir isso é necessário a criação de métodos especiais que são tratados como atríbuto. Esses métodos especiais são chamados de métodos de acesso. Através deles o usuário possui a impressão de estar alterando um atributo, porém na realidade ele está chamando um método.

class Quadrado2{
    constructor(lado,altura){
        this._cor = 'blue'; //_ é utilizado para representar uma propriedade privada
        this.lado = lado;
        this.altura = altura;
    }

    //pelos métodos get e set cria-se métodos que se assemelham com atributos

    get cor() { return this._cor } //utilizado para retornar o valor do atributo
    set cor(novaCor) {this._cor = novaCor; } //recebe e redefine a propriedade interna
}

const quadrado2 = new Quadrado2(5,6);

quadrado2.cor = 'verde';

console.log(quadrado2);
