function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const quadrado1 = new Quadrado(3,4);

console.log(quadrado1.cor);
//aparece como undefined devido o atributo cor só existe dentro da função, sendo assim não exite fora da função

quadrado1.cor = 'red';
//caso peçamos para mostrar esse atributo ele irá aparece, porém não foi o atributo cor presente na função que foi alterado e sim um novo atríbuto foi incluído ao objeto

console.log(quadrado1);

//a extratégia para conseguirmos altera-lo e interagir com o atríbuto é utilizar uma factory function

function criaQuadrado(base, altura){
    
    let cor = 'blue';

    return {
        base,
        altura,
        getCor : function() { return cor; }
    };
};

const quadrado2 = criaQuadrado(3,4);

console.log(quadrado2.getCor());
//desta forma conseguimos ter acesos ao atributo cor, mas nada me impede de tentar mudar o atributo fora dele, porém o quadrado2.cor permanecerá sendo o atríbuto declarado inicialmente 'blue'. Sendo assim somente um novo campo seria atribuído ao objeto

//no contexto de class para fazermos propriedades privadas são feitas da seguinte forma

class ClasseQuadrado{
    constructor(base, altura){
        let cor = 'blue';
        this.base = base;
        this.altura = altura;
        this.getCor = () => { return cor; };
    }
}

//desta forma se constrói um objeto equivalente ao trabalhado antes com function

const quadrado3 = new ClasseQuadrado(3,4);
console.log(quadrado3.getCor());

//até o momento estamos apenas protegendo o atríbuto, outras formas devem ser utilizadas para conseguirmos alterar esses atríbutos protegidos