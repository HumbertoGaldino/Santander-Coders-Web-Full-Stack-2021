class Quadrado {
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "informação não numérica"
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
};

const quadrado1 = new Quadrado (11, 12);

console.log(quadrado1);

quadrado1.cor = 'vermelho';

console.log(quadrado1);